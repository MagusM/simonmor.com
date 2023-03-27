declare module 'maath/random/dist/maath-random.esm' {
    export function randomInt(min: number, max: number): number;
    export function randomFloat(min: number, max: number): number; 
    export function inSphere(number: Float32Array, options): Float32Array;
}
