class BeerSong
  PHRASE="%d bottles of beer on the wall, %d bottles of beer.\n"
  PHRASE1="Take one down and pass it around, %d bottles of beer on the wall.\n"

  def initialize; end

  def verse(num)
    case
    when num > 2
      phrase = PHRASE % [num, num]
      phrase1 = PHRASE1 % (num - 1)
    when num == 2
      phrase = PHRASE % [num, num]
      phrase1 = "Take one down and pass it around, 1 bottle of beer on the wall.\n"
    when num == 1
      phrase = "1 bottle of beer on the wall, 1 bottle of beer.\n"
      phrase1 = "Take it down and pass it around, no more bottles of beer on the wall.\n"
    when num == 0
      phrase = "No more bottles of beer on the wall, no more bottles of beer.\n"
      phrase1 = "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    else
      return "Hey! You can't play this game with that number!!"
    end
    phrase + phrase1
  end

  def verses(first, last)
    beer_song = verse(first)
    next_verse = first - 1
    next_verse.downto(last) do |num|
      beer_song.concat("\n" + verse(num))
    end
    beer_song
  end

  def lyrics
    verses(99, 0)
  end
end