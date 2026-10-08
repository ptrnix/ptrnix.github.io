export interface Project {
    title: string
    description: string
    tags: string[]
    repo?: string
}

// only public projects
export const projects: Project[] = [
    {
        title: "Recursive Descent Parser",
        description: "Formula calculator in Java. A hand-written lexer and recursive descent parser build a syntax tree, which an evaluator computes. Supports operator precedence, variables, functions and error messages with the position in the input.",
        tags: ["Java", "Parser"],
        repo: "https://github.com/ptrnix/Recursive-Descent-Parser"
    },
    {
        title: "RSA Lab",
        description: "Console tool that shows why small RSA keys are insecure. It generates a key, encrypts a text block by block and then recovers the plaintext from the public key alone by factoring the modulus. Compares a multi-threaded brute force search with Pollard rho (Brent) and shows live progress.",
        tags: ["Java", "Cryptography"],
        repo: "https://github.com/ptrnix/rsa-lab"
    },
    {
        title: "Hash Lab",
        description: "Full-stack MERN app to experiment with hashing. An Express API computes MD5, SHA-1, SHA-2 and bcrypt digests, optionally with a random salt, and measures how long each takes. Only digests are stored in MongoDB, never the plaintext. React frontend with Tailwind.",
        tags: ["TypeScript", "React", "Node.js", "MongoDB", "Cryptography"],
        repo: "https://github.com/ptrnix/hash-lab"
    }
    // Add the next projects here, same shape as above
]
