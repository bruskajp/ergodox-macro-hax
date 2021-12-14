import { newMacro, processAll } from "./macros";

// Point this at wherever your config root folder is
const SOURCE_DIR = "./ConfigSource/moonlander_source/keymap.c";

const macroExtensions = {

    // Application quick launches
    /*"fire": newMacro()
        .tapKey("X_LGUI", 100)
        .typeAlphanumeric("firefox\n"),
    "vsco": newMacro()
        .tapKey("X_LGUI", 100)
        .typeAlphanumeric("visual studio c\n"),*/

    // Git shortcuts
    "gstat": newMacro(1)
        .typeAlphanumeric("git status"),
    "gadd": newMacro(1)
        .typeAlphanumeric("git add -A"),
    "gcomm": newMacro(1)
        .typeAlphanumeric("git commit -am \"\"")
        .tapKey("X_LEFT"),
    "gpush": newMacro(1)
        .typeAlphanumeric("git push"),

    // Vim shortcuts
    "vrnam": newMacro(1)
        .tapKey("X_ESCAPE")
        .withShift(newMacro().typeAlphanumeric(";5"))
        .typeAlphanumeric("s///g")
        .tapKey("X_LEFT")
        .tapKey("X_LEFT")
        .tapKey("X_LEFT"),

    // Generic coding macros
    "todo": newMacro(1)
        .typeAlphanumeric("TODO")
        .withShift(newMacro().typeAlphanumeric("; ")),
    "jpb": newMacro(1)
        .typeAlphanumeric("JPB")
        .withShift(newMacro().typeAlphanumeric("; ")),
    "spc2": newMacro(1)
        .typeAlphanumeric("  ")
        .tapKey("X_LEFT"),
    "entr2": newMacro(1)
        .tapKey("X_ENTER")
        .tapKey("X_UP")
        .tapKey("X_END")
        .tapKey("X_ENTER"),
    "up10": newMacro(1)
        .tapKey("X_UP").tapKey("X_UP").tapKey("X_UP").tapKey("X_UP").tapKey("X_UP")
        .tapKey("X_UP").tapKey("X_UP").tapKey("X_UP").tapKey("X_UP").tapKey("X_UP"),
    "dn10": newMacro(1)
        .tapKey("X_DOWN").tapKey("X_DOWN").tapKey("X_DOWN").tapKey("X_DOWN").tapKey("X_DOWN")
        .tapKey("X_DOWN").tapKey("X_DOWN").tapKey("X_DOWN").tapKey("X_DOWN").tapKey("X_DOWN"),

    // C Macros
    "clmb": newMacro(1)
        .typeAlphanumeric("[]")
        .withShift(newMacro().typeAlphanumeric("90 [  ]"))
        .tapKey("X_LEFT").tapKey("X_LEFT"),
    "cclas": newMacro(1) // TODO: Have this make constructor too
        .typeAlphanumeric("class  ")
        .withShift(newMacro().typeAlphanumeric("[]")).tapKey("X_LEFT")
        .tapKey("X_ENTER").tapKey("X_UP").tapKey("X_END").tapKey("X_ENTER")
        .typeAlphanumeric("public").withShift(newMacro().typeAlphanumeric(";"))
        .tapKey("X_ENTER").typeAlphanumeric(" ").tapKey("X_BSPACE")
        .tapKey("X_ENTER")
        .typeAlphanumeric("private").withShift(newMacro().typeAlphanumeric(";"))
        .tapKey("X_ENTER").typeAlphanumeric(" ").tapKey("X_BSPACE")
        .tapKey("X_UP").tapKey("X_UP").tapKey("X_UP").tapKey("X_UP")
        .tapKey("X_END").tapKey("X_LEFT").tapKey("X_LEFT"),
    "cmain": newMacro(1)
        .typeAlphanumeric("int main")
        .withShift(newMacro().typeAlphanumeric("90")).tapKey("X_LEFT")
        .typeAlphanumeric("int argc, char ")
        .withShift(newMacro().typeAlphanumeric("88"))
        .typeAlphanumeric("argv").tapKey("X_RIGHT")
        .withShift(newMacro().typeAlphanumeric("[]")).tapKey("X_LEFT")
        .tapKey("X_ENTER").tapKey("X_UP").tapKey("X_END").tapKey("X_ENTER"),

    // Macros for Typescript mode, type full keywords beyond 4 characters
    "cons": newMacro(0)
        .typeAlphanumeric("const "),
    "retu": newMacro(0)
        .typeAlphanumeric("return "),
    "whil": newMacro(0)
        .typeAlphanumeric("while ")
        // Open and closing parenthesis and brack;ets
        .withShift(newMacro().typeAlphanumeric("90 []"))
        .tapKey("X_LEFT")
        .tapKey("X_ENTER")
        .tapKey("X_UP")
        .withShift(newMacro().tapKey("X_END"))
        .tapKey("X_LEFT")
        .tapKey("X_LEFT")
        .tapKey("X_LEFT"),
    "regx": newMacro(0)
        .typeAlphanumeric("//g")
        .tapKey("X_LEFT"),
    "if": newMacro(0)
        .typeAlphanumeric("if ")
        // Open and closing parenthesis
        .withShift(newMacro().typeAlphanumeric("90 []"))
        .tapKey("X_LEFT")
        .tapKey("X_ENTER")
        .tapKey("X_UP")
        .withShift(newMacro().tapKey("X_END"))
        .tapKey("X_LEFT")
        .tapKey("X_LEFT")
        .tapKey("X_LEFT"),
    "elif": newMacro(0)
        .typeAlphanumeric("else if ")
        // Open and closing parenthesis
        .withShift(newMacro().typeAlphanumeric("90 []"))
        .tapKey("X_LEFT")
        .tapKey("X_ENTER")
        .tapKey("X_UP")
        .withShift(newMacro().tapKey("X_END"))
        .tapKey("X_LEFT")
        .tapKey("X_LEFT")
        .tapKey("X_LEFT"),
    "else": newMacro(0)
        .typeAlphanumeric("else ")
        // Open and closing parenthesis
        .withShift(newMacro().tapKey("X_LBRACKET").tapKey("X_RBRACKET"))
        .tapKey("X_LEFT")
        .tapKey("X_ENTER"),
    "expo": newMacro(0)
        .typeAlphanumeric("export "),
    // .forEach((el) => {})
    "fore": newMacro(0)
        .typeAlphanumeric(".forEach")
        .withShift(newMacro().typeAlphanumeric("e"))
        .typeAlphanumeric("ach")
        // Open and closing parenthesis
        .withShift(newMacro().typeAlphanumeric("90"))
        .tapKey("X_LEFT")
        .withShift(newMacro().typeAlphanumeric("90"))
        .tapKey("X_LEFT")
        .typeAlphanumeric("el")
        .tapKey("X_RIGHT")
        .tapKey("X_SPACE")
        .tapKey("X_EQUAL")
        // Type >
        .withShift(newMacro().tapKey("X_DOT"))
        .tapKey("X_SPACE")
        .withShift(newMacro().tapKey("X_LBRACKET").tapKey("X_RBRACKET"))
        .tapKey("X_LEFT")
        .tapKey("X_ENTER"),
    "map": newMacro(0)
        .typeAlphanumeric(".map")
        // Open and closing parenthesis
        .withShift(newMacro().typeAlphanumeric("90"))
        .tapKey("X_LEFT")
        .withShift(newMacro().typeAlphanumeric("90"))
        .tapKey("X_LEFT")
        .typeAlphanumeric("el")
        .tapKey("X_RIGHT")
        .typeAlphanumeric(" =")
        // Type >
        .withShift(newMacro().tapKey("X_DOT"))
        .tapKey("X_SPACE")
        .withShift(newMacro().tapKey("X_LBRACKET").tapKey("X_RBRACKET"))
        .tapKey("X_LEFT")
        .typeAlphanumeric("\nreturn "),
    "filt": newMacro(0)
        .tapKey("X_DOT")
        .typeAlphanumeric("filter")
        // Open and closing parenthesis
        .withShift(newMacro().typeAlphanumeric("90"))
        .tapKey("X_LEFT")
        .withShift(newMacro().typeAlphanumeric("90"))
        .tapKey("X_LEFT")
        .typeAlphanumeric("el")
        .tapKey("X_RIGHT")
        .typeAlphanumeric(" =")
        // Type >
        .withShift(newMacro().tapKey("X_DOT"))
        .withShift(newMacro().typeAlphanumeric(" []"))
        .tapKey("X_LEFT")
        .typeAlphanumeric("\nreturn "),
    "func": newMacro(0)
        .typeAlphanumeric("function ")
        .withShift(newMacro().typeAlphanumeric("90 []"))
        .tapKey("X_LEFT")
        .typeAlphanumeric("\n")
        .tapKey("X_UP")
        .tapKey("X_END")
        .tapKey("X_LEFT")
        .tapKey("X_LEFT")
        .tapKey("X_LEFT")
        .withShift(newMacro().typeAlphanumeric("; ")),
    "type": newMacro(0)
        .typeAlphanumeric("type "),
    "awai": newMacro(0)
        .typeAlphanumeric("await "),
    "asyn": newMacro(0)
        .typeAlphanumeric("async "),
    "bool": newMacro(0)
        .typeAlphanumeric("boolean"),
    "inte": newMacro(0)
        .typeAlphanumeric("interface "),
    "date": newMacro(0)
        .typeAlphanumeric("Date"),
    "prom": newMacro(0)
        // Type a capital P
        .typeAlphanumeric("Promise")
        // Shift for a <>
        .withShift(newMacro().tapKey("X_COMMA").tapKey("X_DOT"))
        .tapKey("X_LEFT"),
    "numb": newMacro(0).typeAlphanumeric("number"),
    "stri": newMacro(0).typeAlphanumeric("string"),
}

processAll(macroExtensions, SOURCE_DIR)
