/* Using .map()
 *
 * Using the musicData array and .map():
 *   - return a string for each item in the array in the following format
 *     <album-name> by <artist> sold <sales> copies
 *   - store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - do not delete the musicData variable
 *   - do not alter any of the musicData content
 *   - do not format the sales number, leave it as a long string of digits
 */

const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000,
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
];

const albumSalesStrings = musicData.map((item) => {
  return `${item.name} by ${item.artist} sold ${item.sales} copies`;
});

console.log(albumSalesStrings);
