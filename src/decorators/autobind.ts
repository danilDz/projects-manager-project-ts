namespace App {
  // AutoBind decorator
  export function AutoBind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalDescriptor = descriptor.value;
    const adjacentDescriptor: PropertyDescriptor = {
      enumerable: false,
      configurable: true,
      get: function () {
        return originalDescriptor.bind(this);
      },
    };
    return adjacentDescriptor;
  }
}
