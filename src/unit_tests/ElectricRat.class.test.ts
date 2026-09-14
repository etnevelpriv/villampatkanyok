import { expect, describe, it } from "vitest";
import { ElectricRat } from "../scripts/models/ElectricRat.class";

describe("ElectricRat class true tesztek", () => {
    it("Patkany letrehozasa atlagos ertekekkel", () => {
        expect(() => new ElectricRat("Patkany Neve", 15, 75)).not.toThrow();
    });
    it("Patkany letrehozasa also hatarertekekkel", () => {
        expect(() => new ElectricRat("a", 10, 50)).not.toThrow();
    });
    it("Patkany letrehozasa felso hatarertekekkel", () => {
        expect(() => new ElectricRat("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 20, 100)).not.toThrow();
    });
});

describe("ElectricRat class false tesztek", () => {
    it("Patkany letrehozasa hibas rovid nevvel", () => {
        expect(() => new ElectricRat("", 15, 75)).toThrow();
    });
    it("Patkany letrehozasa hibas hosszu nevvel", () => {
        expect(() => new ElectricRat("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 15, 75)).toThrow();
    });
    it("Patkany letrehozasa hibas nev tipussal (bool)", () => {
        expect(() => new ElectricRat(true, 15, 75)).toThrow();
    });
    it("Patkany letrehozasa hibas nev tipussal (number)", () => {
        expect(() => new ElectricRat(1, 15, 75)).toThrow();
    });
    it("Patkany letrehozasa atk hibas also hatarertekkel", () => {
        expect(() => new ElectricRat("Patkany nev", 9, 50)).toThrow();
    });
    it("Patkany letrehozasa atk hibas felso hatarertekkel", () => {
        expect(() => new ElectricRat("Patkany nev", 21, 50)).toThrow();
    });
    it("Patkany letrehozasa atk hibas valtozo tipussal (string)", () => {
        expect(() => new ElectricRat("Patkany nev", "21", 50)).toThrow();
    });
    it("Patkany letrehozasa hp hibas also hatarertekkel", () => {
        expect(() => new ElectricRat("Patkany nev", 15, 49)).toThrow();
    });
    it("Patkany letrehozasa hp hibas felso hatarertekkel", () => {
        expect(() => new ElectricRat("Patkany nev", 15, 101)).toThrow();
    });
    it("Patkany letrehozasa hp hibas valtozo tipussal (string)", () => {
        expect(() => new ElectricRat("Patkany nev", 21, "50")).toThrow();
    });
});