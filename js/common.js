export function isEmpty(value) {
  // null / undefined
  if (value == null) return true;

  // 문자열 (공백 제거 후)
  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  // 숫자 (NaN만 비어있다고 판단)
  if (typeof value === "number") {
    return Number.isNaN(value);
  }

  // Boolean
  if (typeof value === "boolean") {
    return false;
  }

  // Map / Set
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // Array
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  // Date
  if (value instanceof Date) {
    return Number.isNaN(value.getTime());
  }

  // Object
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}

export function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }