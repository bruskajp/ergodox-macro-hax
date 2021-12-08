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
    "add": newMacro(1)
        .typeAlphanumeric("git add -A"),
    "comm": newMacro(0)
        .typeAlphanumeric("git commit -m \"\"")
        .tapKey("X_LEFT"),
    "push": newMacro(0)
        .typeAlphanumeric("git push"),

    // Macros for Typescript mode, type full keywords beyond 4 characters
    "cons": newMacro(0)
        .typeAlphanumeric("const "),
    "retu": newMacro(0)
        .typeAlphanumeric("return "),
    "whil": newMacro(0)
        .typeAlphanumeric("while ")
        // Open and closing parenthesis and brackets
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
