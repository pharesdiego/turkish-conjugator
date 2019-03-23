const map = (
  array: any[],
  iteratee: (value: any, index: number, array: any[]) => any
) => {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
};

const filter = (
  array: any[],
  iteratee: (value: any, index?: number, array?: any[]) => any
): any[] => {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];

  while (++index < length) {
    var value = array[index];
    if (iteratee(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
};

const reduce = (
  array: any[],
  iteratee: (acc: any, value: any, index: number, array: any[]) => any,
  accumulator: any,
  initAccum?: number
) => {
  var index = -1,
    length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
};

export { map, filter, reduce };
