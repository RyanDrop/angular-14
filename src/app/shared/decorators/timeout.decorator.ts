export function Timeout(milliseconds: number = 0) {
  return function (
    _target: unknown,
    _key: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      setTimeout(() => originalMethod.apply(this, args), milliseconds);
    };
    return descriptor;
  };
}
