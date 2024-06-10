A hash table commonly reffered as hash map, is a data structure that implements an associative array abstract data type, a structure that can map keys to values. 
A hash table uses a hash function on an element to compute an index, also called a hash code, into an array of buckets or slots, from which he desired value can be found. During lookup, the key is hashed and the resulting has indicates where the corresonding value is stored. 

Hashing is the most common example of a space-time tradeoff. Instead of linearly searching an array every time to determine if an element is ppresent, which takes O(n) time, we can traverse the array once and hash all the elements into a hash table. 
Determining if the element is present is a simple matter of hashing the element and seeing if it exists in the hash table, which is O(1) on average. 

In the case of hash collisions, there are a number of collision resolution techniques that can be used. 

{Seperate Chaining} - A linked list is used for each value, so that it stores all the collided items.
{Open Addressing} - All entry records are stored in the bucket array itself. When a new entry has to be inserted, the buckets are examined starting with the hashed-to slot and proceeding in the some probe sequence, untill an unoccupied slit is found. 

{TwoSum Challenge}

let twoSum = function(nums, target){
  const result = {}
  for(let i = 0; i <= nums.length; i++) {
    if(result[nums[i]] >= 0){
      return [result[nums[i]], i]
    }
    result [target - nums[i]] = i
  }
};

{Ransom Note Challenge}
let canConstruct = function(ransomNote, magazine){
  const vocab = {};

  for (let i = 0; i < magazine.length; i++){
    const char = magazine[i];
    vocab[char] ? vocab[magazine[i]] ++ : vocab[magazine[i]] = 1;
  }

  for (let i = 0; i < ransomNote.length; i++){
    const char = ransomNote[i];
    if(vocab[char] === 0 || !vocab[char]) {
      return false;
    }
    vocab[char]--;
  }
  return true;
}

{Group Anagrams}

let groupAnagrams = function(strs){
  let m = new Map();
  for (let str of strs){
    let sorted = str.split("").sort().join("");
    if(m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
    else m.set(sorted, [str]);
  }
  return Array.from(m.values());
};

{Insert Delete GetRandom O(1)}
class RandomizedSet{
  constructor(){
    this.map = new Map();
    this.list = [];
  }

  insert(val){
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val);
    this._swap(idx, this.list.length - 1);
    this.list.pop();
    this.map.set(this.list[idx], idx);
    this.map.delete(val);
    return true;
  }

  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }

  _swap(a, b){
    const tmp = this.list[a];
    this.list[a] = this.list[b];
    this.list[b] = tmp;
  }
}

{First Missing Positive}
let firstMissingPositive = function(nums){
  let min =1
  nums.sort((a, b) => a -b)
  for (let i =0; i < nums.length; i++){
    if(min===nums[i]){
      min++
    }
  }
  return min
}
}

{LRU Cache}
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  };

  put(key, value){
    if(this.cache.has(key)){
      this.cache.delete(key);
    }

    this.cache.set(key, value);
    if(this.cache.size > this.capacity){
      this.cache.delete(this.cache.keys().next().value);
    }
  };
}

{All O`one Data Structure}

const stmvalue_in = (m) => new Map([...m].sort((x, y) => x[1] -y[1]));
const stmvalue_de = (m) => new Map([...m]).sort((x, y) => y[1] -x[1]));

function AllOne() {
  let m = new Map();
  let preOp = "start";
  return {inc, dec, getMaxKey, getMinKey};
  function inc(k){
    m.set(k, m.get(k) + 1 ||1);
    preOp = 'inc';
  }

  function dec(k) {
    let occ = m.get(k);
    occ == 1 ? m.delete(k): m.set(k, occ - 1);
    preOp = 'dec';
  }

  function getMaxKey(){
    if (preOp != 'max') m = stmvalue_de(m);
    preOp = 'max';
    return m.keys().next().value || '';
  }

  function getMinKey() {
    if (preOp != 'min') m = stmvalue_in(m)
    preOp = 'min';
    return m.keys().next().value }} '';
  }
}