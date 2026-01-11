/**
 * Development-only logger utility
 * Only logs messages when NODE_ENV is 'development'
 * Supports colored output for better visibility
 */

const isDevelopment = process.env.NODE_ENV === "development";
const isBrowser = typeof window !== "undefined";

// ANSI color codes for Node.js
const ANSI_COLORS = {
	reset: "\x1b[0m",
	green: "\x1b[32m",
	orange: "\x1b[33m",
	red: "\x1b[31m",
	blue: "\x1b[34m",
	cyan: "\x1b[36m",
} as const;

// CSS color styles for browser console
const CSS_COLORS = {
	green: "color: #00ff00",
	orange: "color: #ffa500",
	red: "color: #ff0000",
	blue: "color: #0000ff",
	cyan: "color: #00ffff",
} as const;

/**
 * Creates a colored log function for a specific log level
 */
function createLogFunction(
	consoleMethod:
		| typeof console.log
		| typeof console.warn
		| typeof console.error
		| typeof console.info
		| typeof console.debug,
	color: "green" | "orange" | "red" | "blue" | "cyan",
): (...args: unknown[]) => void {
	return (...args: unknown[]) => {
		if (!isDevelopment) {
			return;
		}

		if (args.length === 0) {
			consoleMethod();
			return;
		}

		if (isBrowser) {
			// Browser: use CSS styling with %c placeholder
			const style = CSS_COLORS[color];
			const firstArg = String(args[0]);
			if (args.length === 1) {
				consoleMethod(`%c${firstArg}`, style);
			} else {
				consoleMethod(`%c${firstArg}`, style, ...args.slice(1));
			}
		} else {
			// Node.js: use ANSI color codes
			const colorCode = ANSI_COLORS[color];
			const resetCode = ANSI_COLORS.reset;
			const firstArg = String(args[0]);
			if (args.length === 1) {
				consoleMethod(`${colorCode}${firstArg}${resetCode}`);
			} else {
				consoleMethod(`${colorCode}${firstArg}${resetCode}`, ...args.slice(1));
			}
		}
	};
}

/**
 * Log utility object with colored methods
 * Only logs in development mode
 */
export const Log = {
	/**
	 * Debug log (green)
	 */
	debug: createLogFunction(console.debug, "green"),

	/**
	 * Info log (blue)
	 */
	info: createLogFunction(console.info, "blue"),

	/**
	 * Standard log (cyan)
	 */
	log: createLogFunction(console.log, "cyan"),

	/**
	 * Warning log (orange)
	 */
	warn: createLogFunction(console.warn, "orange"),

	/**
	 * Error log (red)
	 */
	error: createLogFunction(console.error, "red"),
};
