(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pos-sales_pos-sales_module_ts"],{

/***/ 76807:
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ 95315:
/*!*******************************************!*\
  !*** ./node_modules/encode-utf8/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = function encodeUtf8 (input) {
  var result = []
  var size = input.length

  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index)

    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1)

      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000
        index += 1
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point)
      continue
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push((point >> 6) | 192)
      result.push((point & 63) | 128)
      continue
    }

    // 3-byte UTF-8
    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {
      result.push((point >> 12) | 224)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push((point >> 18) | 240)
      result.push(((point >> 12) & 63) | 128)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD)
  }

  return new Uint8Array(result).buffer
}


/***/ }),

/***/ 75953:
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const canPromise = __webpack_require__(/*! ./can-promise */ 7653)

const QRCode = __webpack_require__(/*! ./core/qrcode */ 37235)
const CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ 82003)
const SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ 8432)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1)
  const argsNum = args.length
  const isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    const data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ 7653:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/can-promise.js ***!
  \************************************************/
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ 65219:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(/*! ./utils */ 53005).getSymbolSize)

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  const posCount = Math.floor(version / 7) + 2
  const size = getSymbolSize(version)
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  const positions = [size - 7] // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const coords = []
  const pos = exports.getRowColCoords(version)
  const posLength = pos.length

  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) || // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ 57959:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 63041)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  let i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ 8696:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/***/ ((module) => {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    const bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ 76329:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Uint8Array(size * size)
  this.reservedBit = new Uint8Array(size * size)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ 3034:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const encodeUtf8 = __webpack_require__(/*! encode-utf8 */ 95315)
const Mode = __webpack_require__(/*! ./mode */ 63041)

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Uint8Array(encodeUtf8(data))
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ 61706:
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(/*! ./error-correction-level */ 4605)

const EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

const EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ 4605:
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 88490:
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(/*! ./utils */ 53005).getSymbolSize)
const FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ 74327:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 53005)

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
const G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  const data = ((errorCorrectionLevel.bit << 3) | mask)
  let d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ 63142:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512)
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  let x = 1
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ 624:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 63041)
const Utils = __webpack_require__(/*! ./utils */ 53005)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  let i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ 87957:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  const size = data.size
  let points = 0
  let sameCountCol = 0
  let sameCountRow = 0
  let lastCol = null
  let lastRow = null

  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (let col = 0; col < size; col++) {
      let module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  const size = data.size
  let points = 0

  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  const size = data.size
  let points = 0
  let bitsCol = 0
  let bitsRow = 0

  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (let col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  let darkCount = 0
  const modulesCount = data.data.length

  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i]

  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  const size = data.size

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length
  let bestPattern = 0
  let lowerPenalty = Infinity

  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    const penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ 63041:
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(/*! ./version-check */ 82414)
const Regex = __webpack_require__(/*! ./regex */ 1233)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 8477:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 63041)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  let i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ 20621:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(/*! ./galois-field */ 63142)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1)

  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  let result = new Uint8Array(divident)

  while ((result.length - divisor.length) >= 0) {
    const coeff = result[0]

    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    let offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  let poly = new Uint8Array([1])
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]))
  }

  return poly
}


/***/ }),

/***/ 37235:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 53005)
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 4605)
const BitBuffer = __webpack_require__(/*! ./bit-buffer */ 8696)
const BitMatrix = __webpack_require__(/*! ./bit-matrix */ 76329)
const AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ 65219)
const FinderPattern = __webpack_require__(/*! ./finder-pattern */ 88490)
const MaskPattern = __webpack_require__(/*! ./mask-pattern */ 87957)
const ECCode = __webpack_require__(/*! ./error-correction-code */ 61706)
const ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ 22144)
const Version = __webpack_require__(/*! ./version */ 51284)
const FormatInfo = __webpack_require__(/*! ./format-info */ 74327)
const Mode = __webpack_require__(/*! ./mode */ 63041)
const Segments = __webpack_require__(/*! ./segments */ 5731)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  const size = matrix.size
  const pos = FinderPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  const size = matrix.size

  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  const pos = AlignmentPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  const size = matrix.size
  const bits = Version.getEncodedBits(version)
  let row, col, mod

  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  let i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData (matrix, data) {
  const size = matrix.size
  let inc = -1
  let row = size - 1
  let bitIndex = 7
  let byteIndex = 0

  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version)
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount)

  let offset = 0
  const dcData = new Array(ecTotalBlocks)
  const ecData = new Array(ecTotalBlocks)
  let maxDataSize = 0
  const buffer = new Uint8Array(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords)
  let index = 0
  let i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  let segments

  if (Array.isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    let estimatedVersion = version

    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  const dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version)
  const modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  let errorCorrectionLevel = ECLevel.M
  let version
  let mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ 22144:
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(/*! ./polynomial */ 20621)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree)
  paddedData.set(data)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length
  if (start > 0) {
    const buff = new Uint8Array(this.degree)
    buff.set(remainder, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ 1233:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+'
const alphanumeric = '[A-Z $%*+\\-./:]+'
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

const TEST_KANJI = new RegExp('^' + kanji + '$')
const TEST_NUMERIC = new RegExp('^' + numeric + '$')
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ 5731:
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 63041)
const NumericData = __webpack_require__(/*! ./numeric-data */ 8477)
const AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ 57959)
const ByteData = __webpack_require__(/*! ./byte-data */ 3034)
const KanjiData = __webpack_require__(/*! ./kanji-data */ 624)
const Regex = __webpack_require__(/*! ./regex */ 1233)
const Utils = __webpack_require__(/*! ./utils */ 53005)
const dijkstra = __webpack_require__(/*! dijkstrajs */ 76807)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  const segments = []
  let result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  let byteSegs
  let kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  const nodes = []
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  const table = {}
  const graph = { start: {} }
  let prevNodeIds = ['start']

  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i]
    const currentNodeIds = []

    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j]
      const key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  let mode
  const bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  const nodes = buildNodes(segs)
  const graph = buildGraph(nodes, version)
  const path = dijkstra.find_path(graph.map, 'start', 'end')

  const optimizedSegs = []
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ 53005:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction
const CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ 82414:
/*!*******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version-check.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ 51284:
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 53005)
const ECCode = __webpack_require__(/*! ./error-correction-code */ 61706)
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 4605)
const Mode = __webpack_require__(/*! ./mode */ 63041)
const VersionCheck = __webpack_require__(/*! ./version-check */ 82414)

// Generator polynomial used to encode version information
const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
const G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  let totalBits = 0

  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  let seg

  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  let d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ 82003:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 64054)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  let opts = options
  let canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  const size = Utils.getImageWidth(qrData.modules.size, opts)

  const ctx = canvasEl.getContext('2d')
  const image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  let opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  const canvasEl = exports.render(qrData, canvas, opts)

  const type = opts.type || 'image/png'
  const rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ 8432:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 64054)

function getColorAttrib (color, attrib) {
  const alpha = color.a / 255
  const str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  let str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  let path = ''
  let moveBy = 0
  let newRow = false
  let lineLength = 0

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size)
    const row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  const opts = Utils.getOptions(options)
  const size = qrData.modules.size
  const data = qrData.modules.data
  const qrcodesize = size + opts.margin * 2

  const bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  const path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ 64054:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  let hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  const hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  const margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0
    ? 4
    : options.margin

  const width = options.width && options.width >= 21 ? options.width : undefined
  const scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  const scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  const size = qr.modules.size
  const data = qr.modules.data
  const scale = exports.getScale(size, opts)
  const symbolSize = Math.floor((size + opts.margin * 2) * scale)
  const scaledMargin = opts.margin * scale
  const palette = [opts.color.light, opts.color.dark]

  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4
      let pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale)
        const jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ 58252:
/*!*******************************************************!*\
  !*** ./src/app/pos-sales/pos-sales-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosSalesPageRoutingModule": () => (/* binding */ PosSalesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _pos_sales_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos-sales.page */ 18077);




const routes = [
    {
        path: '',
        component: _pos_sales_page__WEBPACK_IMPORTED_MODULE_0__.PosSalesPage
    }
];
let PosSalesPageRoutingModule = class PosSalesPageRoutingModule {
};
PosSalesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PosSalesPageRoutingModule);



/***/ }),

/***/ 36953:
/*!***********************************************!*\
  !*** ./src/app/pos-sales/pos-sales.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosSalesPageModule": () => (/* binding */ PosSalesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _pos_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos-sales-routing.module */ 58252);
/* harmony import */ var _pos_sales_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos-sales.page */ 18077);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ 73501);








let PosSalesPageModule = class PosSalesPageModule {
};
PosSalesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__.QRCodeModule,
            _pos_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.PosSalesPageRoutingModule
        ],
        declarations: [_pos_sales_page__WEBPACK_IMPORTED_MODULE_1__.PosSalesPage]
    })
], PosSalesPageModule);



/***/ }),

/***/ 18077:
/*!*********************************************!*\
  !*** ./src/app/pos-sales/pos-sales.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosSalesPage": () => (/* binding */ PosSalesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _pos_sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos-sales.page.html?ngResource */ 22921);
/* harmony import */ var _pos_sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos-sales.page.scss?ngResource */ 29766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _sales_pipe2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sales/pipe2 */ 36387);
/* harmony import */ var _sales_pipe3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sales/pipe3 */ 5022);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 78394);


















//import { toHex } from 'utils';
let PosSalesPage = class PosSalesPage {
    constructor(sanitizer, rout, platform, behavApi, _location, route, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast) {
        this.sanitizer = sanitizer;
        this.rout = rout;
        this.platform = platform;
        this.behavApi = behavApi;
        this._location = _location;
        this.route = route;
        this.renderer = renderer;
        this.modalController = modalController;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.isOpen = false;
        this.isOpenNotif = false;
        this.newNotif = false;
        this.sub_account = [];
        this.sub_accountLocalSales = [];
        this.sub_accountSales = [];
        this.initialInvoices = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.salesLocal = [];
        this.sales = [];
        this.notifArr = [];
        this.LogHistoryLocalArr = [];
        this.purchLocal = [];
        this.purchase = [];
        this.randomsNumber = [];
        this.sub_nameNew = "";
        this.discountPerc = 0;
        this.radioVal = 0;
        this.radioVal2 = 0;
        this.printMode = false;
        this.printArr = [];
        this.offline = false;
        this.color = 'dark';
        this.showMe = null;
        this.status = 'new';
        this.searchLang = 0;
        this.searchTerm = "";
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.finalResult = [];
        this.loadingItems = false;
        this.logHistoryArr = [];
        this.showNotif = false;
        this.device = "";
        this.currenQty = 0;
        this.firstQty = 0;
        this.perchTotQty = 0;
        this.payTotQty = 0;
        this.perchTot = 0;
        this.qtyReal = 0;
        this.availQty = 0;
        this.brandList = [];
        this.filteredItems = [];
        this.taxAll = 0;
        this.netTot = 0;
        this.discTot = 0;
        this.qrcodedata = null;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };
        this.route.queryParams.subscribe(params => {
            //console.log(params.payInvo,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
            if (params && params.payInvo) {
                this.status = 'initial';
                this.payInvo = JSON.parse(params.payInvo);
                //  this.payInvo.yearId = this.year.id
                if (this.payInvo.cust_id == null) {
                    this.radioVal = 1;
                    this.sub_nameNew = JSON.parse(params.sub_name);
                }
                else {
                    this.selectedAccount.sub_name = JSON.parse(params.sub_name);
                }
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name )
                this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
                this.prepareOffline();
                this.getAppInfoCase2();
            }
        });
        this.printArr.push({
            'payInvo': "",
            'itemList': "",
            'selectedAccount': "",
            'sub_nameNew': "",
            "userInfo": "",
            "sub_balanse": 0,
            "balanceStatus": "",
            "company": "",
            "qrcodedata": ""
        });
        this.selectedItem = {
            id: undefined,
            dateCreated: "",
            pay_ref: "",
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            qty: 0,
            tot: 0,
            availQty: 0,
            aliasEn: "",
            tax: 0,
            disc: 0
        };
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            this.device = 'desktop';
            //console.log('I am an desktop device!');
        }
        else if (this.platform.is('mobile')) {
            this.device = 'mobile';
            //console.log('I am an mobile device!'); 
        }
    }
    changeMode() {
        if (this.offline == true) {
            this.offline = false;
            this.color = 'primary';
        }
        else if (this.offline == false) {
            this.offline = true;
            this.color = 'dark';
        }
        this.storage.set('offline', this.offline).then((response) => {
            //console.log('mooooode',this.offline)  
        });
    }
    segmentChanged(ev) {
        this.filteredItems = this.items.filter(item => item.brand === ev.detail.value);
    }
    ionViewDidLeave() {
        //console.log('ionViewWillLeave')
        //  this.subiscribtionNotif.unsubscribe()
    }
    ionViewDidEnter() {
        setTimeout(() => {
            //check all changes in case notif arr >0 
            //  this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif=>{
            //   //console.log('notif page currentNotif behavApiRespnse',notif) 
            //    if(notif.length == 0){
            //     this.notifArr = []
            //    }else{
            //     this.notifArr =  notif[0]  
            //    }
            //   if(this.notifArr.length> 0){ 
            //     this.showNotif = true
            //     this.itemsLocal = notif[1] 
            //     this.items =  this.itemsLocal
            //     this.searchResult = this.items
            //     this.sub_accountSales = notif[2] 
            //     //console.log(this.sub_accountLocalSales)  
            //     this.storage.get('LogHistoryLocal').then((response) => { 
            //       if (response) {
            //         this.LogHistoryLocalArr = response  
            //       } 
            //     });
            //     this.getSubBalance()
            //   } else {
            //     //console.log('no updates')
            //     this.showNotif = false
            //   } 
            //   })
        }, 10000);
    }
    // async presentAlertConfirmSync(type , flt) {
    //   let msg:string = ''
    //   msg = 'توجد تحديثات في الإصناف , هل تريد المزامنة؟'
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     header: 'تأكيد!',
    //     mode:'ios' ,
    //     message: msg,
    //     buttons: [
    //       {
    //         text: 'إلغاء',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         id: 'cancel-button',
    //         handler: (blah) => {
    //           flt.forEach(element => {
    //             let indx = this.notifArr.findIndex(e=>e.logRef === element.logRef)
    //             //console.log ('founded in local ' , indx)
    //             if(indx!=-1){ 
    //               element.logStatus = 0
    //             }  
    //           });
    //           this.storage.set('LogHistoryLocal',flt).then((response) => {
    //           })  
    //         }
    //       }, {
    //         text: 'موافق',
    //         id: 'confirm-button',
    //         handler: () => {
    //         if(type == 'item'){
    //           this.getStockItems('sync item',flt) 
    //         }else if(type == 'customers'){
    //           this.getSalesAccount('sync both',flt)
    //         }else if(type == 'both'){
    //           this.bothItemAndAccount('sync both',flt)
    //         } 
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present(); 
    //  }
    ngOnInit() {
        this.checkPlatform();
        if (this.device == 'mobile') {
            this.rout.navigate(['folder/sales-mob']);
        }
        this.prepareOffline();
        if (this.status == 'new') {
            this.getAppInfo();
            // this.newLogic()
        }
        else if (this.status == 'initial') {
            this.getAppInfoCase2();
            this.radioVal2 = 0;
        }
        // this.getStockItems()
    }
    presentPopover(e) {
        //console.log('preent me', e)
        this.popover.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.items;
        setTimeout(() => {
            this.setFocusOnInput('popInput');
        }, 2000);
    }
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif.event = e;
        this.isOpenNotif = true;
    }
    didDissmis() {
        this.isOpen = false;
        //console.log('dismissOver')
        this.getItemPaysByItemId();
        this.setFocusOnInput('qtyId');
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    bothItemAndAccount(status, flt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllStockItemsWithouteCounts();
            yield this.getSalesAccount(status, flt);
        });
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_6__.FilterPipe;
        const filterPipe2 = new _sales_pipe2__WEBPACK_IMPORTED_MODULE_7__.FilterPipe2;
        const filterPipe3 = new _sales_pipe3__WEBPACK_IMPORTED_MODULE_8__.FilterPipe3;
        let fiteredArr;
        if (this.searchLang == 0) {
            fiteredArr = filterPipe.transform(this.items, ev.target.value);
        }
        else {
            fiteredArr = filterPipe3.transform(this.items, ev.target.value);
        }
        const fiteredArr2 = filterPipe2.transform(this.items, this.aliasTerm);
        //console.log('filte',fiteredArr)
        //console.log('fiteredArr2',fiteredArr2)
        if (fiteredArr.length > 0) {
            fiteredArr.forEach(element => {
                this.searchResult.push(element);
            });
        }
        if (fiteredArr2.length > 0) {
            fiteredArr2.forEach(element => {
                this.searchResult.push(element);
            });
        }
        //console.log('search',this.searchResult)
    }
    clear(item_name) {
        if (item_name) {
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                pay_ref: this.payInvo.pay_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                pay_price: 0,
                perch_price: 0,
                qty: 0,
                tot: 0,
                availQty: 0,
                aliasEn: "",
                tax: 0,
                disc: 0
            };
        }
        else {
            this.searchTerm = "";
        }
    }
    getStockItems() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                //console.log('this.year.id',this.year.id)
                if (this.offline == false) {
                    this.loadingItems = true;
                    this.api.stockItems(1, this.year.id).subscribe(data => {
                        console.log(data);
                        let res = data;
                        this.items = res['data'];
                        this.items.forEach(element => {
                            if (+element.tswiaQuantity > 0) {
                                element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                            }
                            else if (+element.tswiaQuantity < 0) {
                                element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                            }
                            element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                        });
                        this.searchResult = this.items;
                        this.loadingItems = false;
                        this.storage.set('itemsLocal', this.items).then((response) => {
                        });
                    }, (err) => {
                        this.loadingItems = false;
                        //console.log(err);
                    }, () => {
                        this.loadingItems = false;
                    });
                }
                else {
                    this.items = this.itemsLocal;
                    this.items.forEach(element => {
                        if (+element.tswiaQuantity > 0) {
                            element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                        }
                        else if (+element.tswiaQuantity < 0) {
                            element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                        }
                        element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                    });
                    this.searchResult = this.items;
                }
            }
        });
    }
    getBrands() {
        this.api.getBrands().subscribe(data => {
            let res = data;
            this.brandList = res['data'];
            console.log(this.brandList);
            this.filteredItems = this.items.filter(item => item.brand === this.brandList[0].brand);
        }, (err) => {
        }, () => {
        });
    }
    getAllStockItemsWithouteCounts() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                //console.log('this.year.id',this.year.id)
                if (this.offline == false) {
                    this.loadingItems = true;
                    this.api.getAllStockItemsWithouteCounts(1, this.year.id).subscribe(data => {
                        //console.log(data)
                        let res = data;
                        this.items = res['data'];
                        // this.items.forEach(element => {
                        //   if(+element.tswiaQuantity > 0){
                        //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
                        //   }else if(+element.tswiaQuantity < 0){
                        //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
                        //   } 
                        //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
                        // });
                        // this.searchResult = this.items
                        this.loadingItems = false;
                        this.storage.set('itemsLocal', this.items).then((response) => {
                        });
                    }, (err) => {
                        this.loadingItems = false;
                        //console.log(err);
                    }, () => {
                        this.loadingItems = false;
                    });
                }
                else {
                    this.items = this.itemsLocal;
                    // this.items.forEach(element => {
                    //   if(+element.tswiaQuantity > 0){
                    //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
                    //   }else if(+element.tswiaQuantity < 0){
                    //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
                    //   }
                    //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
                    // });
                    this.searchResult = this.items;
                }
            }
        });
    }
    //    getStockItems() {
    //     if (this.offline == false) {
    //       this.api.stockItems2(1 , this.year.id).subscribe(data => {
    //         //console.log(data)
    //         let res = data
    //         this.items = res['data']
    //         this.sumStocksItems()
    //       }, (err) => {
    //         //console.log(err);
    //       },
    //         () => {
    //         }
    //       )
    //     } else {
    //       this.items = this.itemsLocal
    //       this.items.forEach(element => {
    //         element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //       });
    //       this.searchResult = this.items
    //     }
    //   }
    // sumStocksItems(){
    //   this.api.stockItems(1 , this.year.id).subscribe(data => {
    //     //console.log(data)
    //     let res = data
    //     let arr = res['data']
    //     for (let index = 0; index < this.items.length; index++) {
    //       const element = this.items[index];
    //       let flt = arr.filter(x=>x.id == element.id)
    //       if(flt.length>0){
    //         element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
    //        // element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
    //         element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
    //       }
    //     } 
    //     this.items.forEach(element => {
    //       element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //     });
    //      //remove 0 an - quntity
    //      // this.items = this.items.filter(x=> x.quantity > 0)
    //     this.searchResult = this.items
    //   }, (err) => {
    //     //console.log(err);
    //   },
    //     () => {
    //     }
    //   )
    // }
    afterSync(flt) {
        //push flt to local after chanch the logStatus to 1
        flt.forEach(element => {
            if (this.LogHistoryLocalArr.some(e => e.logRef === element.logRef) == false) {
                this.LogHistoryLocalArr.push(element);
            }
            else {
                //get index of it and replace it with value from flt
                let index = this.LogHistoryLocalArr.findIndex(x => x.logRef === element.logRef);
                if (index != -1) {
                    this.LogHistoryLocalArr[index] = element;
                }
            }
        });
        //set loghistory locally  
        //console.log ('finish ' ,  this.LogHistoryLocalArr)
        this.storage.set('LogHistoryLocal', this.LogHistoryLocalArr).then((response) => {
        });
    }
    presentAlertConfirm(initial) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let msg = 'هل تريد طباعة فاتورة ؟ ';
            if (initial) {
                msg = 'هل تريد حذف السجل ؟ ';
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: msg,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah'); 
                            this.prepareInvo();
                            // this.back()
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            if (initial) {
                                this.deleteSalesInvoInit();
                            }
                            else {
                                this.presentModal(this.printArr, 'sales');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Print(elem) {
        this.printMode = true;
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('<html><head>');
        mywindow.document.write('<style type="text/css">');
        mywindow.document.write('.sumsDiv{border-style: solid;border-color: gray;border-width: .5px;} .flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;}.ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }');
        mywindow.document.write('</style></head><body>');
        mywindow.document.write(document.getElementById(elem).innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/ 
        mywindow.print();
        mywindow.close();
        this.printMode = false;
        return true;
    }
    getOffliemode() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline)
            if (this.offline == true) {
                this.color = 'dark';
            }
            else if (this.offline == false) {
                this.color = 'primary';
            }
            else {
                this.SetOffliemode();
            }
        });
    }
    SetOffliemode() {
        this.storage.set('offline', false).then((response) => {
            this.offline = response;
            this.color = 'primary';
        });
    }
    getAppInfo() {
        this.getOffliemode();
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
                //console.log(this.user_info) 
            }
        });
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
            }
        });
        this.storage.get('company').then((response) => {
            this.company = response[0];
            console.log(this.company);
        });
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                //console.log(response)
                //console.log(this.store_info) 
                this.getItems();
                // this.getItemLocalOff()
                // this.getAccountOffline()
                //this.getSalesAccount()
                this.prepareInvo();
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
        this.storage.get('initialInvoices').then((response) => {
            if (response) {
                this.initialInvoices = response;
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.searchLang = response;
                //console.log('searchLang' ,this.searchLang) 
            }
        });
        this.getBrands();
    }
    getAppInfoCase2() {
        this.getOffliemode();
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
                //console.log(this.user_info) 
            }
        });
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
            }
        });
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                //console.log(response)
                //console.log(this.store_info)   
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
        // this.storage.get('initialInvoices').then((response) => {
        //   this.getSalesAccount() 
        //   if (response) {
        //     this.initialInvoices = response  
        //   }
        // }); 
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.searchLang = response;
                //console.log('searchLang' ,this.searchLang) 
            }
        });
    }
    prepareOffline() {
        this.storage.get('salesLocal').then((response) => {
            //console.log('saleslocal heres',this.salesLocal) 
            if (response) {
                this.salesLocal = response;
                //console.log('salesLocal',this.salesLocal) 
            }
        });
        this.storage.get('sales').then((response) => {
            //console.log('sales heres',this.sales) 
            if (response) {
                this.sales = response;
                //console.log('sales',this.sales) 
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
            }
        });
        this.storage.get('sub_accountLocalSales').then((response) => {
            if (response) {
                this.sub_accountLocalSales = response;
                //console.log(this.sub_accountLocalSales)  
            }
        });
        //Yaw
        this.storage.get('sub_accountSales').then((response) => {
            if (response) {
                this.sub_accountSales = response;
                //console.log(this.sub_accountLocalSales)  
                this.getSubBalance();
            }
        });
    }
    // ne logic 
    newLogic() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            //console.log('new logic')
            yield this.getAppInfo();
            yield this.prepareInvo();
        });
    }
    getItemLocalOff() {
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
                //  this.items.forEach(element => {
                //   if(+element.tswiaQuantity > 0){
                //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
                //   }else if(+element.tswiaQuantity < 0){
                //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
                //   }     element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
                // });
                this.searchResult = this.items;
            }
        });
    }
    getAccountOffline() {
        this.storage.get('sub_accountSales').then((response) => {
            if (response) {
                this.sub_account = response;
                //console.log(this.sub_accountLocalSales)  
                this.getSubBalance();
                this.addSubaccountLocal();
            }
        });
    }
    //end of new logic
    radioChange(ev) {
        //console.log(ev.target.value) 
    }
    recalSubBalance() {
        // adding new change to subbalances
        this.sub_account.forEach(element => {
            element.sub_balance = 0;
            let debitTot = +element.changeeTot + +element.fromDebitTot;
            let creditTot = +element.purchChangeeTot + +element.toCreditTot;
            if (this.radioVal == 0 && this.selectedAccount.id == element.id) {
                debitTot = +debitTot + +this.payInvo.changee;
            }
            if (debitTot == creditTot) {
                element.sub_balance = 0;
                element.currentCustumerStatus = '';
            }
            else if (debitTot > creditTot) {
                element.sub_balance = (+debitTot - +creditTot).toFixed(2);
                element.currentCustumerStatus = 'debit';
                if (+this.selectedAccount.id == +element.id) {
                    this.selectedAccount.sub_balance = element.sub_balance;
                    this.selectedAccount.currentCustumerStatus = element.currentCustumerStatus;
                }
            }
            else if (creditTot > debitTot) {
                element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                element.currentCustumerStatus = 'credit';
                if (+this.selectedAccount.id == +element.id) {
                    this.selectedAccount.sub_balance = element.sub_balance;
                    this.selectedAccount.currentCustumerStatus = element.currentCustumerStatus;
                }
            }
        });
        //console.log('recalSubBalance',this.sub_account)
    }
    getSubBalance() {
        // payTot' => $payTot ,
        //      'tot_prTot' => $tot_prTot ,
        //      'changeeTot' => $changeeTot ,
        //      'purchPayTot' => $purchPayTot ,
        //      'purchTot_prTot' => $purchTot_prTot ,
        //      'purchChangeeTot' => $purchChangeeTot ,
        // 'fromDebitTot' => $fromDebitTot ,
        // 'fromCreditTot' => $fromCreditTot ,
        //  'toDebitTot' => $toDebitTot ,
        // 'toCreditTot' => $toCreditTot   
        this.sub_account.forEach(element => {
            element.sub_balance = 0;
            let debitTot = +element.changeeTot + +element.fromDebitTot;
            let creditTot = +element.purchChangeeTot + +element.toCreditTot;
            if (debitTot == creditTot) {
                element.sub_balance = 0;
                this.currentCustumerStatus = '';
            }
            else if (debitTot > creditTot) {
                element.sub_balance = (+debitTot - +creditTot).toFixed(2);
                this.currentCustumerStatus = 'debit';
            }
            else if (creditTot > debitTot) {
                element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                this.currentCustumerStatus = 'credit';
            }
        });
        //console.log('balances',this.sub_account)
    }
    radioChange2(ev, form) {
        //console.log(ev.target.value)  
        //console.log(this.status) 
        if (form == 'from') {
            if (ev.target.value == 1 && this.status == 'initial') {
                this.status = 'toFinal';
                this.payInvo.yearId = this.year.id;
                if (this.itemList.length > 0) {
                    this.itemList.forEach(element => {
                        element.yearId = this.year.id;
                    });
                }
                //console.log('convert invo to final',this.status)
            }
            else if (ev.target.value == 0 && this.status == 'toFinal') {
                this.status = 'initial';
                //console.log('from final to initial',this.status)
            }
        }
    }
    prepareInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_id: "", cat_name: "", phone: "", address: "", currentCustumerStatus: 0 };
        this.sub_nameNew = "";
        this.radioVal = 0;
        this.radioVal2 = 0;
        this.payInvo = { pay_id: undefined, pay_ref: 0, store_id: "", tot_pr: 0, pay: 0, pay_date: "", pay_time: "", user_id: "", cust_id: null, pay_method: "", discount: 0, changee: 0, sub_name: "", payComment: "", nextPay: null, yearId: this.year.id, companyId: this.company.id, recived: 0, taxTot: 0, backed: 0 };
        this.discountPerc = 0;
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.generateRandom();
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.user_id = this.user_info.id;
        this.payInvo.yearId = this.year.id;
        //console.log(this.payInvo) 
        this.itemList = [];
        this.getAccountOffline();
        // this.getSalesAccount()   
        // this.setFocusOnInput('dst')
        // this.setFocusOnInput('dstPop')
    }
    setFocusOnInput(Input) {
        //console.log('setFocusOnInput')
        if (Input == 'dst') {
            this.nameField.nativeElement.focus();
        }
        else if (Input == 'dstPop') {
            this.dstPop.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
            setTimeout(() => {
                this.popInput.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyId') {
            this.qtyId.setFocus();
        }
        else if (Input == 'popInput') {
            this.popInput.setFocus();
        }
    }
    isFocused(event) {
        //console.log('dsdfsdf',event)
    }
    getItems() {
        if (this.offline == false) {
            this.api.getItems().subscribe(data => {
                let res = data;
                this.items = res['data'];
                this.items.forEach(element => {
                    this.sanitizer.bypassSecurityTrustResourceUrl(element['imgUrl']);
                });
                console.log(this.items);
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.items = this.itemsLocal;
        }
    }
    //Yaw
    getSalesAccount(status, flt) {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                //console.log(this.sub_account)
                this.getSubBalance();
                this.addSubaccountLocal();
                if (status == 'sync both') {
                    this.storage.set('sub_accountSales', this.sub_account).then((response) => {
                        if (response) {
                        }
                    });
                    this.afterSync(flt);
                }
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.MixSubaccountSalesOffline();
        }
    }
    //  prepareCustSupl(){
    //   this.sub_account.forEach(element => {
    //     if(element.cat_id == 1){ 
    //         let tot_pr = element. 
    //         let discount =  element.
    //         let totAfterDiscout =   + tot_pr - +discount 
    //         let pay =  
    //         let balance = +totAfterDiscout - +pay
    //        // this.debitors = this.debitors + +balance
    //        if(+element.debit > 0){
    //         element.debit = +element.debit + +balance
    //         }else if(+element.debit == 0 && +element.credit == 0){
    //           element.debit = +element.debit + +balance
    //         }else if(+element.credit > 0){
    //           if(balance >= element.credit){
    //             element.debit = +balance - +element.credit
    //             element.credit = 0
    //           }else if(balance  <  element.credit){
    //             element.credit = +element.credit - +balance
    //             element.debit = 0
    //           }
    //         }
    //     } else if(element.cat_id == 2){
    //       let fltPurch : Array<any> = []
    //       fltPurch = this.purchase.filter(x=>x.cust_id == element.id)
    //       //console.log('fltPurch',fltPurch)
    //       if(fltPurch.length>0){
    //         let tot_pr =  fltPurch.reduce( (acc, obj)=> { return acc + +obj.tot_pr; }, 0); 
    //         let discount =  fltPurch.reduce( (acc, obj)=> { return acc + +obj.discount; }, 0);
    //         let totAfterDiscout =   + tot_pr - +discount 
    //         let pay =  fltPurch.reduce( (acc, obj)=> { return acc + +obj.pay; }, 0);
    //         let balance = +totAfterDiscout - +pay
    //        // this.creditors = this.creditors + +balance
    //        if(+element.credit > 0){
    //         element.credit = +element.credit + +balance
    //         }else if(+element.debit == 0 && +element.credit == 0){
    //           element.credit = +element.credit + +balance
    //         }else if(+element.debit > 0){
    //           if(balance >= element.debit){
    //             element.credit = +balance - +element.debit
    //             element.debit = 0
    //           }else if(balance  <  element.debit){
    //             element.debit = +element.debit - +balance
    //             element.credit = 0
    //           }
    //         }
    //       }
    //     } 
    //   });
    // }
    //Yaw
    addSubaccountLocal() {
        if (this.sub_account) {
            if (this.sub_accountLocalSales) {
                for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                    const element = this.sub_accountLocalSales[i];
                    this.sub_account.push(element);
                }
            }
        }
        else {
            if (this.sub_accountLocalSales) {
                this.sub_account = this.sub_accountLocalSales;
            }
        }
    }
    //Yaw
    MixSubaccountSalesOffline() {
        this.sub_account = [];
        if (this.sub_accountLocalSales) {
            for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                const element = this.sub_accountLocalSales[i];
                this.sub_account.push(element);
            }
        }
        if (this.sub_accountSales) {
            for (let i = 0; i < this.sub_accountSales.length; i++) {
                const element = this.sub_accountSales[i];
                this.sub_account.push(element);
            }
        }
    }
    generateRandom() {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString();
        this.payInvo.pay_ref = this.store_info.store_ref + randomsNumber;
        //console.log(randomsNumber)
        //console.log(this.payInvo.pay_ref)  
    }
    pickAccount(ev) {
        let fl = this.sub_account.filter(x => x.sub_name == ev.target.value);
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedAccount = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: fl[0]['sub_balance'],
                cat_id: fl[0]['cat_id'],
                cat_name: fl[0]['cat_name'],
                phone: fl[0]['phone'],
                address: fl[0]['address'],
                currentCustumerStatus: fl[0]['currentCustumerStatus']
            };
            //console.log( this.selectedAccount);
            this.payInvo.cust_id = this.selectedAccount.id;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
            //  this.setFocusOnInput()
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
            this.selectedItem.item_name = "";
        }
    }
    selectFromPop(item) {
        //console.log(item)
        this.selectedItem = {
            id: item.id,
            dateCreated: item.dateCreated,
            pay_ref: this.payInvo.pay_ref,
            item_desc: item.item_desc,
            item_name: item.item_name,
            item_unit: item.item_unit,
            parcode: item.parcode,
            pay_price: item.pay_price,
            perch_price: item.perch_price,
            qty: "",
            tot: item.pay_price,
            availQty: item.quantity,
            aliasEn: item.aliasEn,
            tax: item.tax,
            disc: 0
        };
        this.searchTerm = item.item_name;
        //console.log( this.selectedItem); 
        this.didDissmis();
        //perform calculate here so moataz can get the qty
    }
    getItemPaysByItemId() {
        this.api.getItemQtyPaysByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            console.log('getItemPaysByItemId', data);
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payTotQty = res['data'][0].salesQuantity;
            }
            this.getQtyPurchByItemId();
        }, (err) => {
            //console.log(err);
            this.presentToast('1خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    getQtyPurchByItemId() {
        this.api.getQtyPurchByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            //console.log('purch',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.perchTotQty = res['data'][0].perchQuantity;
                this.firstQty = res['data'][0].firstQuantity;
            }
            this.getQtyTswiaByItemId();
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    getQtyTswiaByItemId() {
        this.api.getQtyTswiaByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            console.log('getQtyTswiaByItemId', data);
            let res = data;
            if (res['message'] != 'No record Found') {
                this.availQty = res['data'][0].availQty;
                this.qtyReal = res['data'][0].qtyReal;
            }
            this.getQtyTotalItemId();
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    getQtyTotalItemId() {
        //console.log('perchTotQty',this.perchTotQty ,this.payTotQty )
        //تجميع الكيات السالبة وتحويلها لموجب لإضافتها للمشتريات
        if ((+this.availQty - +this.qtyReal) < 0) {
            this.perchTotQty = +this.perchTotQty + Math.abs((+this.availQty - +this.qtyReal));
        }
        else if ((+this.availQty - +this.qtyReal) > 0) {
            this.payTotQty = +this.payTotQty + (+this.availQty - +this.qtyReal);
        }
        this.availQty = +this.perchTotQty - +this.payTotQty;
        console.log(this.payTotQty, this.payTotQty);
    }
    pickDetail(ev) {
        let fl = [];
        if (this.searchLang == 1) {
            fl = this.items.filter(x => x.item_desc == ev.target.value);
            //console.log('hyrr',fl);
        }
        else {
            fl = this.items.filter(x => x.item_name == ev.target.value);
            //console.log(fl);
        }
        if (fl.length > 0) {
            this.selectedItem = {
                id: fl[0]['id'],
                dateCreated: fl[0]['dateCreated'],
                pay_ref: this.payInvo.pay_ref,
                item_desc: fl[0]['item_desc'],
                item_name: fl[0]['item_name'],
                item_unit: fl[0]['item_unit'],
                parcode: fl[0]['parcode'],
                pay_price: fl[0]['pay_price'],
                perch_price: fl[0]['perch_price'],
                qty: "",
                tot: fl[0]['pay_price'],
                availQty: fl[0]['quantity'],
                aliasEn: fl[0]['aliasEn'],
                tax: fl[0]['tax'],
                disc: fl[0]['disc']
            };
            //console.log( this.selectedItem);
            this.setFocusOnInput('qtyId');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
            this.selectedItem.item_desc = "";
        }
    }
    qtyhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        let fl = [];
        if (this.itemList.length > 0) {
            fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name);
            if (fl.length > 0) {
                //console.log(fl)
                if (+this.selectedItem.qty + +fl[0].quantity > +this.selectedItem.availQty) {
                    this.presentToast('الصنف موجود بالقائمة , مجموع الكمية الجديد اكبر من المتوفر في المخزن', 'warning');
                }
            }
            else {
                if (+this.selectedItem.qty > +this.selectedItem.availQty) {
                    this.presentToast('الكمية في المخزن غير كافية', 'warning');
                }
            }
        }
        else {
            if (+this.selectedItem.qty > +this.selectedItem.availQty) {
                this.presentToast('الكمية في المخزن غير كافية', 'warning');
            }
        }
    }
    pricehange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
    }
    getTotal() {
        let sum = this.itemList.reduce((acc, obj) => { return acc + (+obj.quantity * +obj.pay_price); }, 0);
        // let sum = this.itemList.reduce( (acc, obj)=> { return acc + +(+obj.quntity * +obj.pay_price); }, 0);
        this.payInvo.taxTot = this.itemList.reduce((acc, obj) => { return acc + (+obj.pay_price * (+obj.tax / 100)); }, 0);
        // this.taxTot = this.itemList.reduce( (acc, obj)=> { return acc + (+obj.pay_price * (+obj.tax/100)); }, 0);
        console.log('sum', sum);
        //
        this.payInvo.tot_pr = +sum - +this.payInvo.discount;
        this.taxAll = this.payInvo.tot_pr + +this.payInvo.taxTot;
        this.payInvo.changee = +this.taxAll - +this.payInvo.pay;
        this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
    }
    payChange(ev) {
        //console.log(ev); 
        // if(this.discountPerc>0){
        //   this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
        // }
        this.payInvo.recived = ev.target.value;
        this.payInvo.backed = +this.taxAll - ev.target.value;
        this.payInvo.changee = +this.taxAll - ev.target.value;
    }
    discountChange(ev) {
        //console.log('discountChange' ,ev); 
        //this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
        this.getTotal();
    }
    discountPerChange(ev) {
        //console.log('discountPerChange',ev);
        this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        this.payInvo.changee = +(this.payInvo.tot_pr - this.payInvo.discount) - this.payInvo.pay;
    }
    deleteItem(index) {
        //console.log( index); 
        this.itemList.splice(index, 1);
        //console.log( this.itemList);
        this.payInvo.pay = 0;
        this.discountPerc = 0;
        this.payInvo.discount = 0;
        this.netTot = 0;
        this.taxAll = 0;
        this.getTotal();
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: color,
                cssClass: 'cust_Toast',
                mode: 'ios',
                position: 'top'
            });
            toast.present();
        });
    }
    refresh(para) {
        if (para == 'account') {
            this.getSalesAccount();
        }
        else {
            // this.getItems()
            this.getAllStockItemsWithouteCounts();
        }
    }
    addTolist() {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
        }
        else {
            let fl = [];
            if (this.itemList.length > 0) {
                fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.pay_price == this.selectedItem.pay_price);
            }
            if (fl.length == 0) {
                let d = new Date;
                let r = this.datePipe.transform(d, 'dd-MM-YYYY');
                this.itemList.push({
                    "id": 'NULL',
                    "pay_ref": this.selectedItem.pay_ref,
                    "item_name": this.selectedItem.item_name,
                    "pay_price": this.selectedItem.pay_price,
                    "quantity": +this.selectedItem.qty,
                    "tot": this.selectedItem.tot,
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +this.selectedItem.id,
                    "dateCreated": r,
                    "perch_price": this.selectedItem.perch_price,
                    "tax": this.selectedItem.tax,
                    "disc": this.selectedItem.disc
                });
            }
            else {
                //console.log(this.itemList);
                //console.log(fl[0].quantity);
                //console.log(+this.selectedItem.qty);
                this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty;
                let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
                this.itemList[index].quantity = +this.selectedItem.qty;
                this.itemList[index].tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
                // this.itemList[index].tot.toFixed(2)
            }
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                pay_ref: this.payInvo.pay_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                pay_price: 0,
                perch_price: 0,
                qty: 0,
                tot: 0,
                availQty: 0,
                aliasEn: "",
                tax: 0,
                disc: 0
            };
            this.discountPerc = 0;
            this.payInvo.discount = 0;
            this.getTotal();
            this.setFocusOnInput('dstPop');
        }
    }
    addTolistClick(item) {
        this.selectedItem = item;
        console.log(item);
        this.selectedItem = {
            id: item.id,
            dateCreated: "",
            pay_ref: this.payInvo.pay_ref,
            item_desc: item.item_desc,
            item_name: item.item_name,
            item_unit: item.item_unit,
            parcode: item.parcode,
            pay_price: item.pay_price,
            perch_price: item.item_name,
            qty: 1,
            tot: +item.pay_price + (+item.tax / 100 * +item.pay_price),
            availQty: 0,
            aliasEn: +item.aliasEn,
            tax: item.tax,
            disc: item.disc
        };
        // if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0 ) {
        //   this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger')
        // }else {
        let fl = [];
        if (this.itemList.length > 0) {
            fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.pay_price == this.selectedItem.pay_price);
        }
        if (fl.length == 0) {
            let d = new Date;
            let r = this.datePipe.transform(d, 'dd-MM-YYYY');
            this.selectedItem.qty = 1;
            this.itemList.push({
                "id": 'NULL',
                "pay_ref": this.selectedItem.pay_ref,
                "item_name": this.selectedItem.item_name,
                "pay_price": this.selectedItem.pay_price,
                "quantity": +this.selectedItem.qty,
                "tot": this.selectedItem.tot,
                "store_id": +this.store_info.id,
                "yearId": +this.year.id,
                "item_id": +this.selectedItem.id,
                "dateCreated": r,
                "perch_price": this.selectedItem.perch_price,
                "tax": this.selectedItem.tax,
                "disc": this.selectedItem.disc
            });
        }
        else {
            //console.log(this.itemList);
            //console.log(fl[0].quantity);
            //console.log(+this.selectedItem.qty);
            this.selectedItem.qty = 1;
            this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty;
            let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
            this.itemList[index].quantity = +this.selectedItem.qty;
            this.itemList[index].tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
            // this.itemList[index].tot.toFixed(2)
        }
        this.selectedItem = {
            id: undefined,
            dateCreated: "",
            pay_ref: this.payInvo.pay_ref,
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            qty: 0,
            tot: 0,
            availQty: 0,
            aliasEn: "",
            tax: fl[0]['tax'],
            disc: fl[0]['disc']
        };
        this.discountPerc = 0;
        this.payInvo.discount = 0;
        this.getTotal();
    }
    qtyClick(i) {
        //console.log(i)
        this.showMe = i;
    }
    hideMe(i) {
        this.showMe = null;
    }
    editCell(i) {
        if (+this.itemList[i].quantity > 0 && +this.itemList[i].pay_price > 0) {
            this.itemList[i].tot = +this.itemList[i].quantity * +this.itemList[i].pay_price;
            this.discountPerc = 0;
            this.payInvo.discount = 0;
            this.hideMe(i);
            this.getTotal();
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
        }
    }
    validate() {
        let fl = [];
        if (this.sub_account) {
            fl = this.sub_account.filter(x => x.sub_name == this.sub_nameNew);
            //console.log(fl)
        }
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
            this.presentToast('الرجاء تحديد التاريخ ', 'danger');
            return false;
        }
        else if (this.payInvo.changee < 0) {
            this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم  ', 'danger');
            return false;
        }
        else {
            return true;
        }
    }
    saveIntial() {
        if (this.radioVal == 1) {
            this.payInvo.sub_name = this.sub_nameNew;
            this.payInvo.cust_id = null;
        }
        // check if the invoice is exist
        if (this.initialInvoices.length > 0) {
            this.initialInvoices = this.initialInvoices.filter(x => x['payInvo'].pay_ref != this.payInvo.pay_ref);
        }
        this.initialInvoices.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
            this.printArr = [];
            this.recalSubBalance();
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew,
                "user_name": this.user_info.full_name,
                "sub_balanse": this.selectedAccount.sub_balance,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                "company": this.company,
                "qrcodedata": this.qrcodedata
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.prepareInvo();
            this.status = 'new';
        });
    }
    saveInvoInit() {
        // if(this.radioVal == 1){
        //   this.payInvo.sub_name = this.sub_nameNew
        //   this.payInvo.cust_id = null
        //  }  
        this.api.saveSalesInvoInit(this.payInvo).subscribe(data => {
            //console.log(data)
            this.saveitemListinit();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    deleteInitial() {
        if (this.initialInvoices.length > 0) {
            this.initialInvoices = this.initialInvoices.filter(x => x['payInvo'].pay_ref != this.payInvo.pay_ref);
        }
        this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
            this.presentToast('تم الحذف بنجاح', 'success');
            this.status = 'new';
            this.prepareInvo();
        });
    }
    deleteSalesInvoInit() {
        if (this.status != 'toFinal') {
            this.presentLoadingWithOptions('جاري حذف البيانات ...');
        }
        this.api.deleteSalesInvoInit(this.payInvo.pay_id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.deleteSalesitemListInit();
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    deleteSalesitemListInit() {
        this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                if (this.status != 'toFinal') {
                    this.presentToast('تم الحذف بنجاح', 'success');
                    this.prepareInvo();
                }
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    save() {
        let d = this.payInvo.pay_date;
        this.payInvo.sub_name = this.selectedAccount.sub_name;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        //console.log('save testing', this.payInvo, this.payInvo.sub_name)
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            // initial invoice
            if (this.radioVal2 == 0 && this.radioVal == 0 && this.status == 'new') {
                //console.log('new initial')
                this.saveInvoInit();
            }
            else if (this.radioVal2 == 0 && this.radioVal == 1 && this.status == 'new') {
                // update initialInvoices
                //console.log('save sub account initial')
                this.saveSubAccountInit();
            }
            else if (this.radioVal2 == 0 && this.status == 'initial') {
                // update initialInvoices
                //console.log('update initial')
                this.updateInitInvo();
            }
            else {
                // حساب محفوظ اوننلاين وموجود في قائمة العملاء
                if (this.radioVal == 0 && this.selectedAccount.id != null) {
                    if (this.offline == true) {
                        this.saveInvoLocal();
                    }
                    else {
                        this.saveInvo();
                    }
                }
                // حساب محفوظ محلي وموجود في قائمة العملاء
                else if (this.radioVal == 0 && this.selectedAccount.id == null && this.selectedAccount.sub_name != "") {
                    if (this.offline == true) {
                        this.saveInvoLocal();
                    }
                    else {
                        this.saveSubAccount();
                    }
                }
                //حساب جديد
                else if (this.radioVal == 1) {
                    //console.log(this.radioVal, 'saveSubAccountlocal()')
                    if (this.offline == true) {
                        //console.log('saveSubAccountlocal()')
                        this.saveSubAccountlocal();
                    }
                    else {
                        this.saveSubAccount();
                    }
                }
            }
        }
    }
    // prepareLogHistory(itemData , firstq , role){
    //   this.logHistoryArr = []
    //  let dt = new Date()
    //  let typee = "" 
    //    if(role == 'insert'){
    //      typee = "insert firstq"
    //        itemData.id = firstq.item_id
    //      this.logHistoryArr.push(
    //        {
    //          "id":this.firstq.id,
    //          "logRef":this.generateRandom(typee),
    //          "userId": this.user_info.id,
    //          "typee":typee,
    //          "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    //          "logStatus":0,
    //          "logToken": JSON.stringify(firstq)  ,
    //          "yearId": this.year.id,
    //          "store_id" :this.store_info.id
    //        }
    //        )
    //        typee = "insert item"
    //        this.logHistoryArr.push(
    //          {
    //            "id":null,
    //            "logRef":this.generateRandom(typee),
    //            "userId":this.user_info.id,
    //            "typee":typee,
    //            "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    //            "logStatus":0,
    //            "logToken":JSON.stringify(itemData)  ,
    //            "yearId":this.year.id,
    //            "store_id":this.store_info.id
    //          }
    //          )
    //    } else {
    //     // typee = "insert firstq"
    //      // firstq.item_id =  itemData.id 
    //      // this.logHistoryArr.push(
    //      //   {
    //      //     "id":this.firstq.id,
    //      //     "logRef":this.generateRandom(),
    //      //     "userId": this.user_info.id,
    //      //     "typee":typee,
    //      //     "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    //      //     "logStatus":0,
    //      //     "logToken": JSON.stringify(firstq)  ,
    //      //     "yearId": this.year.id,
    //      //     "store_id" :this.store_info.id
    //      //   }
    //      //   )
    //      if(role == 'update' ){
    //        typee = "update item" 
    //      }else if(role == 'delete' ){
    //        typee = "delete item" 
    //      }
    //        this.logHistoryArr.push(
    //          {
    //            "id":null,
    //            "logRef":this.generateRandom(typee),
    //            "userId":this.user_info.id,
    //            "typee":typee,
    //            "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    //            "logStatus":0,
    //            "logToken":JSON.stringify(itemData)  ,
    //            "yearId":this.year.id,
    //            "store_id":this.store_info.id
    //          }
    //          )
    //        }
    //      return this.logHistoryArr
    //    }
    saveLogHistory() {
        //let mdata =  this.prepareLogHistory(itemData , firstq , role) 
        //console.log('this.logHistoryArr[0]',this.logHistoryArr[0])
        let role;
        let cust;
        let invo;
        if (this.logHistoryArr.length > 1) {
            invo = this.logHistoryArr[1];
            cust = this.logHistoryArr[0];
            role = 'new account';
        }
        else {
            invo = this.logHistoryArr[0];
            role = undefined;
        }
        this.api.saveLogHistoryMultiSales(invo, cust, role).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.logHistoryArr = [];
                this.presentAlertConfirm();
                this.presentToast('تم الحفظ بنجاح', 'success');
                // this.getStockItems()
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
            yield this.getAllStockItemsWithouteCounts();
        });
    }
    back() {
        this._location.back();
    }
    updateInitInvo() {
        this.api.updateInitSalesInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            this.deleteSalesitemListInit4update();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
        });
    }
    deleteSalesitemListInit4update() {
        this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.saveitemListinit();
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                    this.loadingController.dismiss();
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
        });
    }
    preparenewaccount() {
        if (this.selectedAccount.sub_name.length > 0 && this.selectedAccount.id == null) {
            // this.selectedAccount.sub_name = this.payInvo.sub_name
        }
        else {
            //console.log('slwcted from drop' ) 
            this.selectedAccount.sub_name = this.sub_nameNew;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
        }
        this.selectedAccount.id = null;
        this.selectedAccount.ac_id = 1;
        this.selectedAccount.sub_type = "debit";
        this.selectedAccount.sub_code = null;
        this.selectedAccount.sub_balance = "0";
        this.selectedAccount.cat_id = 1;
        this.selectedAccount.cat_name = 'العملاء';
        this.selectedAccount.store_id = this.store_info.id;
    }
    saveSubAccount() {
        //console.log('crea accoun')
        this.preparenewaccount();
        this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.payInvo.cust_id = data['message'];
                //حالة الحساب موجود محلي والحفظ انلاين يسحب من المحلي ويضاف سsalesaccount   
                if (this.radioVal == 0 && this.selectedAccount.id == null && this.offline == false) {
                    this.sub_accountLocalSales = this.sub_accountLocalSales.filter(x => x.sub_name != this.selectedAccount.sub_name);
                    //console.log('imhereeeeeeeeeeeeeeeeee')
                    this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
                        //console.log('resoponse set', this.sub_accountLocalSales)
                        this.selectedAccount.id = this.payInvo.cust_id;
                        this.sub_accountSales.push(this.selectedAccount);
                        this.storage.set('sub_accountSales', this.sub_accountSales).then((response) => {
                        });
                    });
                }
                this.selectedAccount.id = data['message'];
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('insert customer'),
                    "userId": this.user_info.id,
                    "typee": 'insert customer',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(this.selectedAccount),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
                this.saveInvo();
            }
            else {
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    saveSubAccountInit() {
        this.preparenewaccount();
        this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.payInvo.cust_id = data['message'];
                //console.log('crea accoun' ,  data['message'] )
                this.saveInvoInit();
            }
            else {
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    saveSubAccountlocal() {
        //console.log('crea accoun')
        this.preparenewaccount();
        // add new account to acount list tobe available in next load
        if (!this.sub_account) {
            this.sub_account = [];
        }
        this.sub_account.push(this.selectedAccount);
        this.sub_accountLocalSales.push(this.selectedAccount);
        this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
            //console.log('resoponse set', this.sub_accountLocalSales)
            // this.payInvo.cust_id =  data['message']
            this.saveInvoLocal();
        });
    }
    saveInvo() {
        this.api.saveSalesInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            this.saveitemList();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveInvoLocal() {
        this.salesLocal.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('salesLocal', this.salesLocal).then((response) => {
            //console.log('resoponse set', response)
            this.printArr = [];
            this.recalSubBalance();
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew,
                "user_name": this.user_info.full_name,
                "sub_balanse": this.selectedAccount.sub_balance,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                "company": this.company,
                "qrcodedata": this.qrcodedata
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
            if (this.initialInvoices.length > 0) {
                this.initialInvoices = this.initialInvoices.filter(x => x['payInvo'].pay_ref != this.payInvo.pay_ref);
                this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
                });
            }
        });
    }
    saveitemListinit() {
        this.api.saveSalesitemListInit(this.itemList).subscribe(data => {
            //console.log(data) 
            this.recalSubBalance();
            //console.log(this.selectedAccount.currentCustumerStatus)  
            //console.log(this.printArr) 
            this.printArr = [];
            this.recalSubBalance();
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew,
                "user_name": this.user_info.full_name,
                "sub_balanse": this.selectedAccount.sub_balance,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                "company": this.company,
                "qrcodedata": this.qrcodedata
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.prepareInvo();
            this.status = 'new';
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    saveitemList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveSalesitemList(this.itemList).subscribe(data => {
                //console.log(data) 
                this.recalSubBalance();
                //console.log(this.selectedAccount.currentCustumerStatus) 
                this.printArr = [];
                this.printArr.push({
                    'payInvo': this.payInvo,
                    'itemList': this.itemList,
                    'selectedAccount': this.selectedAccount,
                    'sub_nameNew': this.sub_nameNew,
                    "user_name": this.user_info.full_name,
                    "sub_balanse": this.selectedAccount.sub_balance,
                    "balanceStatus": this.selectedAccount.currentCustumerStatus,
                    "company": this.company,
                    "qrcodedata": this.qrcodedata
                });
                //console.log('printinggg',this.printArr)
                this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                //console.log(' case ffff ' ,this.sales)
                this.sales.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                let arr = [];
                arr.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('insert sales'),
                    "userId": this.user_info.id,
                    "typee": 'insert sales',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(arr[0]),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
                // this.storage.set('sales', this.sales).then((response) => {
                // //console.log('sales', response) 
                // })
                if (this.status == 'toFinal') {
                    this.deleteSalesInvoInit();
                }
                // //console.log(this.printArr)
                // if(this.initialInvoices.length > 0){ 
                //   this.initialInvoices = this.initialInvoices.filter(x=>x['payInvo'].pay_ref != this.payInvo.pay_ref) 
                //   this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
                //     //console.log(this.initialInvoices , 'initialInvoices')
                //   });
                // }
                this.performSync();
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    deleteInitInvo() {
    }
    prepareQrcode() {
        const isoDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(this.payInvo.pay_date, 'yyyy-MM-dd', 'en-US');
        // Convert time to ISO format 
        const isoTime = this.payInvo.pay_time + 'Z';
        // Concatenate date and time
        const isoDateTime = isoDate + 'T' + isoTime;
        console.log(isoDateTime); // 2022-02-10T10:30:00Z
        const companyNameHex = this.stringToHex(this.company.engName);
        const companyNameTag = "01";
        let companyNameLengthHex = this.toHex((this.company.engName.length).toFixed(0));
        if (companyNameLengthHex.length == 1) {
            companyNameLengthHex = "0" + companyNameLengthHex;
        }
        const companyInitial = companyNameTag + companyNameLengthHex + companyNameHex;
        console.log("company", companyNameHex, companyNameLengthHex, companyInitial);
        const companyVatHex = this.stringToHex(this.company.vatNo.toString());
        const companyVatTag = "02";
        let companyVatLengthHex = this.toHex((this.company.vatNo.toString().length).toFixed(0));
        if (companyVatLengthHex.length == 1) {
            companyVatLengthHex = "0" + companyVatLengthHex;
        }
        const companyVatIntial = companyVatTag + companyVatLengthHex + companyVatHex;
        console.log("companyVat", companyVatHex, companyVatLengthHex, companyVatIntial);
        const dateTimeHex = this.stringToHex(isoDateTime.toString());
        const dateTimeTag = "03";
        let dateTimeLengthHex = this.toHex((isoDateTime.toString().length).toFixed(0));
        if (dateTimeLengthHex.length == 1) {
            dateTimeLengthHex = "0" + dateTimeLengthHex;
        }
        const dateTimeInitial = dateTimeTag + dateTimeLengthHex + dateTimeHex;
        console.log("dateTime", dateTimeHex, dateTimeLengthHex, dateTimeInitial);
        const totalHex = this.stringToHex((this.taxAll.toFixed(2)).toString());
        const totalTag = "04";
        let totalLengthHex = this.toHex(((this.taxAll.toFixed(2)).toString().length).toFixed(0));
        if (totalLengthHex.length == 1) {
            totalLengthHex = "0" + totalLengthHex;
        }
        const totalIntial = totalTag + totalLengthHex + totalHex;
        console.log("total", totalHex, totalLengthHex, totalIntial);
        const taxHex = this.stringToHex((this.payInvo.taxTot.toFixed(2)).toString());
        const taxTag = "05";
        let taxLengthHex = this.toHex(((this.payInvo.taxTot.toFixed(2)).toString().length).toFixed(0));
        if (taxLengthHex.length == 1) {
            taxLengthHex = "0" + taxLengthHex;
        }
        const taxInitial = taxTag + taxLengthHex + taxHex;
        console.log("tax", taxHex, taxLengthHex, taxInitial);
        // // QR code data 
        // const qrData = {
        //   companyName: 'My Company',
        //   vatNo: '987654321',
        //   dateTime: '2022-02-10T10:30:00Z',
        //   total: 99.99 
        // };
        // Convert object to JSON string
        // const qrJson = JSON.stringify(qrData);
        // Encode JSON to Base64
        const qrBase64 = btoa(companyInitial + companyVatIntial + dateTimeInitial + totalIntial + taxInitial);
        this.qrcodedata = qrBase64;
        this.printArr[0].qrcodedata = this.qrcodedata;
        console.log(this.qrcodedata);
    }
    stringToHex(str) {
        let hex = '';
        for (let i = 0; i < str.length; i++) {
            hex += this.toHex(str.charCodeAt(i));
        }
        return hex;
    }
    toHex(num) {
        return parseInt(num, 10).toString(16);
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.recalSubBalance();
            this.prepareQrcode();
            const modal = yield this.modalController.create({
                component: _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__.PrintModalPage,
                componentProps: {
                    "printArr": this.printArr,
                    "page": page
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    //console.log(dataReturned )
                    this.prepareInvo();
                }
            });
            return yield modal.present();
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 5000,
                message: msg,
                translucent: true,
                // cssClass: 'custom-class custom-loading',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed with role:', role);
        });
    }
};
PosSalesPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController }
];
PosSalesPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ["dst",] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['dstPop',] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['qtyId',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['popover',] }],
    popoverNotif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['popoverNotif',] }]
};
PosSalesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-pos-sales',
        template: _pos_sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pos_sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PosSalesPage);



/***/ }),

/***/ 29766:
/*!**********************************************************!*\
  !*** ./src/app/pos-sales/pos-sales.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.bnone {\n  border: none;\n}\n\n.items-container {\n  overflow: auto;\n  white-space: nowrap;\n  min-height: 300px;\n  max-height: 300px;\n}\n\n.items-container2 {\n  overflow: auto;\n  white-space: nowrap;\n  min-height: 385px;\n  max-height: 385px;\n}\n\n.item-title {\n  height: 2em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\nion-segment {\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\nion-segment-button {\n  display: inline-block;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy1zYWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNJLGtCQUFBO0FBRVI7O0FBQUk7RUFBTyxtQkFBQTtBQUlYOztBQUZJO0VBQU0sa0JBQUE7QUFNVjs7QUFMSTtFQUNJLGdCQUFBO0FBUVI7O0FBTkE7RUFDRSxZQUFBO0FBU0Y7O0FBTEE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBU0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUFDO0VBQ0MsOEJBQUE7QUFHRjs7QUFEQztFQUNDLDRCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUhBO0VBQ0UseUJBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEU7RUFDSyxrQkFBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSEU7RUFDRSx5QkFBQTtBQU1KOztBQUpFO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQWF2RyIsImZpbGUiOiJwb3Mtc2FsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAgIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cbi5ibm9uZXtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5cbi5pdGVtcy1jb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuLml0ZW1zLWNvbnRhaW5lcjIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLWhlaWdodDogMzg1cHg7XG4gIG1heC1oZWlnaHQ6IDM4NXB4O1xufVxuXG4vLyAuaXRlbXMtY29udGFpbmVyIGlvbi1jb2wge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyB9XG5cbi5pdGVtLXRpdGxlIHtcbiAgaGVpZ2h0OiAyZW07IFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgIFxufVxuXG5pb24tc2VnbWVudCB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbiAucmVke1xuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSBcbiB9XG4gLmRhcmtve1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspXG4gfVxuaW9uLXBvcG92ZXJ7XG4gIC0tb2Zmc2V0LXkgOiAtMzBweFxufVxuLmN1c3RJbnB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwLjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4gXG4gIC50YWJsZXtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMnB4O1xuICB9XG5cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICB9XG4gIHRkLCB0aCB7Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogOHB4OyBmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6IGJsYWNrO31cbiAgICAgICAiXX0= */";

/***/ }),

/***/ 22921:
/*!**********************************************************!*\
  !*** ./src/app/pos-sales/pos-sales.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>فاتورة مبيعات</ion-title>\n    <ion-buttons  slot=\"end\">  \n      <div class=\"poRel\">\n        <div class=\"posAb noti\">\n         <ion-label>\n           <ion-text *ngIf=\"showNotif == true && notifArr.length> 0\">{{notifArr.length}}</ion-text> \n         </ion-label> \n       </div>\n       <!-- notif -->\n       <!-- <div (click)=\"presentPopoverNotif($event)\">\n         <ion-icon name=\"notifications-outline\"  class=\"dark\"  [ngClass]=\"{'warn':showNotif == true && notifArr.length> 0 , 'dark': showNotif == false }\"></ion-icon> \n       </div> -->\n     </div> \n     \n\n    <ion-button fill=\"clear\" class=\"ion-margin\"  (click)=\"changeMode()\"  > \n      <ion-label><ion-icon name=\"wifi-outline\" [color]=\"color\" style=\"font-size:20px\"></ion-icon></ion-label> \n      <ion-label><ion-text color=\"dark\"  *ngIf=\"color == 'primary'\">متصل</ion-text></ion-label>   \n      <ion-label><ion-text  color=\"dark\" *ngIf=\"color == 'dark'\">غير متصل</ion-text></ion-label>\n    </ion-button> \n    </ion-buttons> \n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n\n<!-- <ion-grid  *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\">\n    <ion-col size=\"12\">\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-grid class=\"ion-no-padding ion-no-margin\">\n          <ion-row dir=\"rtl\">\n            <ion-col size=\"4\">\n              <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                <ion-grid class=\"ion-no-padding ion-no-margin\">\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" >\n                        <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                        <ion-label>قائمة الحسابات </ion-label> \n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" >\n                        <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                        <ion-label>حساب جديد</ion-label> \n                      </ion-item>\n                    </ion-col> \n                  </ion-row>\n                </ion-grid> \n              </ion-radio-group>\n            </ion-col>\n            <ion-col size=\"3\" offset=\"2\">\n              <ion-item lines=\"none\" >\n                <ion-label>\n                  نوع الفاتورة\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item lines=\"none\">\n                <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"payInvo.pay_date\"  />\n                <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>  \n          <ion-row>\n            <ion-col size=\"3\" offset=\"1\" *ngIf=\"radioVal == 0 \"> \n              <ion-item class=\"custInput\">\n                <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales\" id=\"accountSales\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales\" style=\"height: auto;max-height: 20px;\">\n                  <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                </datalist>\n                <ion-label *ngIf=\"!sub_account\">\n                  <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                 </ion-label>\n                <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('account')\">\n                  <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                </ion-button>   \n              </ion-item>   \n            </ion-col>\n            <ion-col size=\"3\" offset=\"1\"    *ngIf=\"radioVal == 1\"> \n              <ion-item class=\"custInput\"> \n               <ion-input [(ngModel)]=\"sub_nameNew\" ></ion-input>\n              </ion-item>   \n            </ion-col>\n\n             <ion-col size=\"4\" offset=\"1\">\n              <ion-item class=\"custInput\"> \n                <ion-radio-group [(ngModel)]=\"radioVal2\"  (ionChange)=\"radioChange2($event ,'from')\" >\n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row>\n                      <ion-col class=\"ion-no-padding ion-no-margin\">\n                        <ion-item lines=\"none\" >\n                          <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                          <ion-label> مبدئية </ion-label> \n                        </ion-item>\n                      </ion-col>\n                      <ion-col class=\"ion-no-padding ion-no-margin\">\n                        <ion-item lines=\"none\" >\n                          <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                          <ion-label>  نهائية </ion-label> \n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n                </ion-radio-group> \n              </ion-item> \n            </ion-col>  \n          \n              <ion-col size=\"3\" class=\"ion-text-start\">\n              <ion-item class=\"custInput\"> \n                <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n               </ion-item>   \n            </ion-col>  \n          </ion-row>\n         </ion-grid> \n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n\n<ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\">\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <!-- brand list -->\n            <ion-row *ngIf=\"brandList.length>0\">\n              <ion-card>\n                <ion-segment (ionChange)=\"segmentChanged($event)\" scrollable = \"true\" >\n                  <ion-segment-button *ngFor=\"let brand of brandList\" [value]=\"brand.brand\">\n                    {{brand.brand}}\n                  </ion-segment-button>\n                </ion-segment>\n                <ion-grid class=\"items-container\"> \n                  <ion-row *ngIf=\"filteredItems.length>0\">  \n                      <ion-col size=\"4\" *ngFor=\"let item of filteredItems\">\n                        <ion-card (click)=\"addTolistClick(item)\">\n                          <img alt=\"\" [src]=\"item.imgUrl\"> \n                        </ion-card>\n                        <div class=\"item-title\">\n                          <p class=\"ion-text-center\">\n                            {{ item.item_name }}\n                          </p>\n                        </div>\n                      </ion-col> \n                  </ion-row> \n                </ion-grid>\n              </ion-card>\n            </ion-row> \n          </ion-col>\n\n          <ion-col size=\"5\">\n            <ion-card class=\"items-container2\">\n              <table class=\"table\">\n                <tr>  \n                  <th></th>\n                  <th>الصنف</th>\n                  <th>الكمية</th>\n                  <th>سعر </th>\n                  <th>المجموع</th>\n                </tr>\n                <tr *ngFor=\"let item of itemList ; let i = index\" (dblclick)=\"qtyClick(i)\">\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                      <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\n                    </ion-button>\n                  </td>\n                  <td style=\"max-width:100px; height: 2.5em; overflow: hidden;\n                  text-overflow: ellipsis;\n                  display: -webkit-box;\n                  -webkit-line-clamp: 2;\n                  -webkit-box-orient: vertical;\"> {{item.item_name}} </td>\n                  <td>\n                    <ion-text >{{item.quantity}}</ion-text>\n                    <!-- <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)]=\"item.quantity\"\n                        (ionBlur)=\"editCell(i)\"></ion-input>\n                    </ion-item> -->\n                  </td>\n                  <td>\n                    <ion-text >{{item.pay_price + (+item.tax/100 * +item.pay_price )}}</ion-text>\n                    <!-- <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)]=\"item.pay_price\"\n                        (ionBlur)=\"editCell(i)\"></ion-input>\n                    </ion-item> -->\n                  </td>\n  \n                  <!-- <td>{{+item.tax}}</td> -->\n                  <td>{{+item.tot}}</td>\n                  \n                </tr>\n              </table>\n            </ion-card>\n          </ion-col>\n\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <ion-card class=\"items-container2\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>صافي المبلغ  :</strong>  <ion-text>{{payInvo.tot_pr}} </ion-text></ion-label>\n                  \n                  </ion-col>\n                  \n                  <ion-col size=\"12\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>الخصــم :</strong>  <ion-text>{{payInvo.discount}} </ion-text></ion-label>\n                    \n                  </ion-col>\n\n                  <ion-col size=\"12\"  class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>الضريبة : </strong>  <ion-text>{{payInvo.taxTot}} </ion-text></ion-label>\n                    \n                  </ion-col>\n\n                 \n                  <ion-col size=\"12\"   class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>  صافي المبلغ مع الضريبة  :</strong> <ion-text>{{taxAll}} </ion-text></ion-label>\n                    \n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      </ion-col> \n  </ion-row>\n\n\n  <ion-row class=\"ion-justify-content-center\" *ngIf=\"payInvo\">\n    <ion-col size=\"9\" class=\"ion-no-padding\">\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"2\">\n              <ion-label class=\"ion-padding\"><strong>   الخصــم:</strong></ion-label>\n              <ion-item class=\"custInput\">\n                <ion-input [(ngModel)]=\"payInvo.discount\" (ionChange)=\"discountChange($event)\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-label class=\"ion-padding\"><strong> المستلم نقدا </strong></ion-label>\n              <ion-item class=\"custInput\">\n                <ion-input [(ngModel)]=\"payInvo.pay\" (ionChange)=\"payChange($event)\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-label class=\"ion-padding\"><strong>المتبقي </strong></ion-label>\n              <ion-item class=\"custInput\">\n                <ion-input [(ngModel)]=\"payInvo.changee\" [readonly]=\"true\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"5\">\n              <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\" (click)=\"save()\">\n                <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n              </ion-button>\n            </ion-col> \n            <ion-col size=\"5\">\n            <div *ngIf=\"printArr\">\n              <qrcode [qrdata]=\"printArr[0].qrcodedata\" size=\"256\" level=\"'M'\"></qrcode>\n             </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n \n</ion-grid>\n\n</ion-content>\n";

/***/ }),

/***/ 73501:
/*!*******************************************************************!*\
  !*** ./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRCodeComponent": () => (/* binding */ QRCodeComponent),
/* harmony export */   "QRCodeElementType": () => (/* binding */ QRCodeElementType),
/* harmony export */   "QRCodeErrorCorrectionLevel": () => (/* binding */ QRCodeErrorCorrectionLevel),
/* harmony export */   "QRCodeModule": () => (/* binding */ QRCodeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ 75953);



const _c0 = ["qrcElement"];

class QRCodeComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.allowEmptyString = false;
    this.colorDark = '#000000ff';
    this.colorLight = '#ffffffff';
    this.cssClass = 'qrcode';
    this.elementType = 'canvas';
    this.errorCorrectionLevel = 'M';
    this.margin = 4;
    this.qrdata = '';
    this.scale = 4;
    this.width = 10;
  }

  ngOnChanges() {
    this.createQRCode();
  }

  isValidQrCodeText(data) {
    if (this.allowEmptyString === false) {
      return !(typeof data === 'undefined' || data === '' || data === 'null' || data === null);
    }

    return !(typeof data === 'undefined');
  }

  toDataURL() {
    return new Promise((resolve, reject) => {
      qrcode__WEBPACK_IMPORTED_MODULE_0__.toDataURL(this.qrdata, {
        color: {
          dark: this.colorDark,
          light: this.colorLight
        },
        errorCorrectionLevel: this.errorCorrectionLevel,
        margin: this.margin,
        scale: this.scale,
        version: this.version,
        width: this.width
      }, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }

  toCanvas(canvas) {
    return new Promise((resolve, reject) => {
      qrcode__WEBPACK_IMPORTED_MODULE_0__.toCanvas(canvas, this.qrdata, {
        color: {
          dark: this.colorDark,
          light: this.colorLight
        },
        errorCorrectionLevel: this.errorCorrectionLevel,
        margin: this.margin,
        scale: this.scale,
        version: this.version,
        width: this.width
      }, error => {
        if (error) {
          reject(error);
        } else {
          resolve('success');
        }
      });
    });
  }

  toSVG() {
    return new Promise((resolve, reject) => {
      qrcode__WEBPACK_IMPORTED_MODULE_0__.toString(this.qrdata, {
        color: {
          dark: this.colorDark,
          light: this.colorLight
        },
        errorCorrectionLevel: this.errorCorrectionLevel,
        margin: this.margin,
        scale: this.scale,
        type: 'svg',
        version: this.version,
        width: this.width
      }, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }

  renderElement(element) {
    for (const node of this.qrcElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.qrcElement.nativeElement, node);
    }

    this.renderer.appendChild(this.qrcElement.nativeElement, element);
  }

  createQRCode() {
    // Set sensitive defaults
    if (this.version && this.version > 40) {
      console.warn('[angularx-qrcode] max value for `version` is 40');
      this.version = 40;
    } else if (this.version && this.version < 1) {
      console.warn('[angularx-qrcode]`min value for `version` is 1');
      this.version = 1;
    } else if (this.version !== undefined && isNaN(this.version)) {
      console.warn('[angularx-qrcode] version should be a number, defaulting to auto.');
      this.version = undefined;
    }

    try {
      if (!this.isValidQrCodeText(this.qrdata)) {
        throw new Error('[angularx-qrcode] Field `qrdata` is empty, set `allowEmptyString="true"` to overwrite this behaviour.');
      } // This is a fix to allow an empty string as qrdata


      if (this.isValidQrCodeText(this.qrdata) && this.qrdata === '') {
        this.qrdata = ' ';
      }

      let element;

      switch (this.elementType) {
        case 'canvas':
          element = this.renderer.createElement('canvas');
          this.toCanvas(element).then(() => {
            this.renderElement(element);
          }).catch(e => {
            console.error('[angularx-qrcode] canvas error:', e);
          });
          break;

        case 'svg':
          element = this.renderer.createElement('div');
          this.toSVG().then(svgString => {
            this.renderer.setProperty(element, 'innerHTML', svgString);
            const innerElement = element.firstChild;
            this.renderer.setAttribute(innerElement, 'height', `${this.width}`);
            this.renderer.setAttribute(innerElement, 'width', `${this.width}`);
            this.renderElement(innerElement);
          }).catch(e => {
            console.error('[angularx-qrcode] svg error:', e);
          });
          break;

        case 'url':
        case 'img':
        default:
          element = this.renderer.createElement('img');
          this.toDataURL().then(dataUrl => {
            element.setAttribute('src', dataUrl);
            this.renderElement(element);
          }).catch(e => {
            console.error('[angularx-qrcode] img/url error:', e);
          });
      }
    } catch (e) {
      console.error('[angularx-qrcode] Error generating QR Code:', e.message);
    }
  }

}

QRCodeComponent.ɵfac = function QRCodeComponent_Factory(t) {
  return new (t || QRCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};

QRCodeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QRCodeComponent,
  selectors: [["qrcode"]],
  viewQuery: function QRCodeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.qrcElement = _t.first);
    }
  },
  inputs: {
    allowEmptyString: "allowEmptyString",
    colorDark: "colorDark",
    colorLight: "colorLight",
    cssClass: "cssClass",
    elementType: "elementType",
    errorCorrectionLevel: "errorCorrectionLevel",
    margin: "margin",
    qrdata: "qrdata",
    scale: "scale",
    version: "version",
    width: "width"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [["qrcElement", ""]],
  template: function QRCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QRCodeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'qrcode',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: `<div #qrcElement [class]="cssClass"></div>`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    allowEmptyString: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    colorDark: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    colorLight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    elementType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    errorCorrectionLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    qrdata: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    version: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    qrcElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['qrcElement', {
        static: true
      }]
    }]
  });
})();

class QRCodeModule {}

QRCodeModule.ɵfac = function QRCodeModule_Factory(t) {
  return new (t || QRCodeModule)();
};

QRCodeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: QRCodeModule,
  declarations: [QRCodeComponent],
  exports: [QRCodeComponent]
});
QRCodeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: []
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QRCodeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [],
      declarations: [QRCodeComponent],
      exports: [QRCodeComponent]
    }]
  }], null, null);
})();

var QRCodeErrorCorrectionLevel;

(function (QRCodeErrorCorrectionLevel) {
  QRCodeErrorCorrectionLevel["low"] = "low";
  QRCodeErrorCorrectionLevel["medium"] = "medium";
  QRCodeErrorCorrectionLevel["quartile"] = "quartile";
  QRCodeErrorCorrectionLevel["high"] = "high";
  QRCodeErrorCorrectionLevel["L"] = "L";
  QRCodeErrorCorrectionLevel["M"] = "M";
  QRCodeErrorCorrectionLevel["Q"] = "Q";
  QRCodeErrorCorrectionLevel["H"] = "H";
})(QRCodeErrorCorrectionLevel || (QRCodeErrorCorrectionLevel = {}));

var QRCodeElementType;

(function (QRCodeElementType) {
  QRCodeElementType["url"] = "url";
  QRCodeElementType["img"] = "img";
  QRCodeElementType["canvas"] = "canvas";
  QRCodeElementType["svg"] = "svg";
})(QRCodeElementType || (QRCodeElementType = {}));
/*
 * Public API Surface of angularx-qrcode
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pos-sales_pos-sales_module_ts.js.map