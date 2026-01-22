# JavaScript Fundamentals 📘

This repository is a comprehensive guide to **JavaScript Data Types, Variables, and Operators**. It includes practical code examples for beginners and serves as a quick reference for exam preparation.

---

## 📋 Table of Contents
1. [Data Types (Primitive vs Reference)](#1-data-types)
2. [Operators](#2-operators)
   - [Arithmetic & Assignment](#arithmetic--assignment)
   - [Comparison](#comparison)
   - [Unary (Increment/Decrement)](#unary-operators)
   - [Logical & Nullish](#logical--nullish-coalescing)
3. [Control Flow & Ternary](#3-control-flow)
4. [Type Checking & Quirks](#4-type-checking--quirks)

---

## 1️⃣ Data Types

JavaScript categorizes data into two main types: **Primitive** and **Non-Primitive (Reference)**.

### 🔹 Primitive Types
Stored directly by **value**. They are immutable.
**String:** "username", 'hello', `` backticks ``.
**Number:** Integers and floats like 10 or 12.25.
**Boolean:** true or false.
**Undefined:** Variable declared but not assigned.
**Null:** Intentional absence of value.
**Symbol:** Unique identifiers.
**BigInt:** For numbers larger than $2^{53} - 1$.

### 🔹 Non-Primitive (Reference) Types
Stored by **reference** in memory.
**Arrays:** let arr = [1, 2, 3];.
**Objects:** let obj = { name: "test" };.
**Functions:** Code blocks designed for specific tasks.

> **Note on Reference Copying:** Copying a reference type points to the same memory location. Changing one affects the other.

---

## 2️⃣ Operators

### Arithmetic & Assignment
Used for mathematical calculations and storing values.
**Arithmetic:** +, -, /, *, ** (exponent), % (modulus/remainder).
**Assignment:** =, +=, -=, *=, /=, %=.

### Comparison
Returns a boolean value (true or false).
==: Checks value only.
===: Checks value **and** data type (Strict equality).
!= / !==: Not equal / Strictly not equal.
>, <, >=, <=: Relational comparisons.



### Unary Operators
Operators that work with a single operand.
++ / --: Increment and decrement.
+: Can convert a string to a number (e.g., +"10").
!: Logical NOT (inverts boolean).

**Pre vs Post Increment:**
javascript

let d = 4;
let e = d++; // Post: e gets 4, then d becomes 5
let f = 4;
let g = ++f; // Pre: f becomes 5, then g gets 5
