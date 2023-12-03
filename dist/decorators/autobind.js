// AutoBind decorator
export function AutoBind(target, methodName, descriptor) {
    const originalDescriptor = descriptor.value;
    const adjacentDescriptor = {
        enumerable: false,
        configurable: true,
        get: function () {
            return originalDescriptor.bind(this);
        },
    };
    return adjacentDescriptor;
}
