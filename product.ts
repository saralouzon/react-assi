// Task 4: Product Interface and Total Price
interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Example:
const products: Product[] = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 2.0 }
];
console.log(calculateTotalPrice(products)); // Output: 3.5


// Task 5: Validate Email
function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    return regex.test(email);
}

// Example:
console.log(isValidEmail("test@example.com")); // Output: true
console.log(isValidEmail("invalid-email")); // Output: false
