import { Extension } from "@tiptap/core";
import {
	Blockquote,
	type BlockquoteOptions,
} from "@tiptap/extension-blockquote";
import { Bold, type BoldOptions } from "@tiptap/extension-bold";
import {
	BulletList,
	type BulletListOptions,
} from "@tiptap/extension-bullet-list";
import { Code, type CodeOptions } from "@tiptap/extension-code";
import { CodeBlock, type CodeBlockOptions } from "@tiptap/extension-code-block";
import { Document } from "@tiptap/extension-document";
import {
	Dropcursor,
	type DropcursorOptions,
} from "@tiptap/extension-dropcursor";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { HardBreak, type HardBreakOptions } from "@tiptap/extension-hard-break";
import { Heading, type HeadingOptions } from "@tiptap/extension-heading";
import { History, type HistoryOptions } from "@tiptap/extension-history";
import {
	HorizontalRule,
	type HorizontalRuleOptions,
} from "@tiptap/extension-horizontal-rule";
import { Italic, type ItalicOptions } from "@tiptap/extension-italic";
import { Link, type LinkOptions } from "@tiptap/extension-link";
import { ListItem, type ListItemOptions } from "@tiptap/extension-list-item";
import {
	OrderedList,
	type OrderedListOptions,
} from "@tiptap/extension-ordered-list";
import { Paragraph, type ParagraphOptions } from "@tiptap/extension-paragraph";
import { Strike, type StrikeOptions } from "@tiptap/extension-strike";
import { Table, type TableOptions } from "@tiptap/extension-table";
import { TableCell, type TableCellOptions } from "@tiptap/extension-table-cell";
import {
	TableHeader,
	type TableHeaderOptions,
} from "@tiptap/extension-table-header";
import { TableRow, type TableRowOptions } from "@tiptap/extension-table-row";
import { Text } from "@tiptap/extension-text";
import { Underline, type UnderlineOptions } from "@tiptap/extension-underline";

interface richTextOptions {
	blockquote: Partial<BlockquoteOptions> | false;
	bold: Partial<BoldOptions> | false;
	bulletList: Partial<BulletListOptions> | false;
	code: Partial<CodeOptions> | false;
	codeBlock: Partial<CodeBlockOptions> | false;
	document: false;
	dropcursor: Partial<DropcursorOptions> | false;
	gapcursor: false;
	hardBreak: Partial<HardBreakOptions> | false;
	heading: Partial<HeadingOptions> | false;
	history: Partial<HistoryOptions> | false;
	horizontalRule: Partial<HorizontalRuleOptions> | false;
	italic: Partial<ItalicOptions> | false;
	listItem: Partial<ListItemOptions> | false;
	orderedList: Partial<OrderedListOptions> | false;
	paragraph: Partial<ParagraphOptions> | false;
	strike: Partial<StrikeOptions> | false;
	link: Partial<LinkOptions> | false;
	text: false;
	underline: Partial<UnderlineOptions> | false;
	table: Partial<TableOptions> | false;
	tableCell: Partial<TableCellOptions> | false;
	tableHeader: Partial<TableHeaderOptions> | false;
	tableRow: Partial<TableRowOptions> | false;
}

export const richTextProfile = Extension.create<richTextOptions>({
	name: "starterKit",

	addExtensions() {
		const extensions = [];

		if (this.options.blockquote !== false) {
			extensions.push(Blockquote.configure(this.options?.blockquote));
		}

		if (this.options.bold !== false) {
			extensions.push(Bold.configure(this.options?.bold));
		}

		if (this.options.bulletList !== false) {
			extensions.push(BulletList.configure(this.options?.bulletList));
		}

		if (this.options.code !== false) {
			extensions.push(Code.configure(this.options?.code));
		}

		if (this.options.codeBlock !== false) {
			extensions.push(CodeBlock.configure(this.options?.codeBlock));
		}

		if (this.options.document !== false) {
			extensions.push(Document.configure(this.options?.document));
		}

		if (this.options.dropcursor !== false) {
			extensions.push(Dropcursor.configure(this.options?.dropcursor));
		}

		if (this.options.gapcursor !== false) {
			extensions.push(Gapcursor.configure(this.options?.gapcursor));
		}

		if (this.options.hardBreak !== false) {
			extensions.push(HardBreak.configure(this.options?.hardBreak));
		}

		if (this.options.heading !== false) {
			extensions.push(Heading.configure(this.options?.heading));
		}

		if (this.options.history !== false) {
			extensions.push(History.configure(this.options?.history));
		}

		if (this.options.horizontalRule !== false) {
			extensions.push(HorizontalRule.configure(this.options?.horizontalRule));
		}

		if (this.options.italic !== false) {
			extensions.push(Italic.configure(this.options?.italic));
		}

		if (this.options.listItem !== false) {
			extensions.push(ListItem.configure(this.options?.listItem));
		}

		if (this.options.orderedList !== false) {
			extensions.push(OrderedList.configure(this.options?.orderedList));
		}

		if (this.options.paragraph !== false) {
			extensions.push(Paragraph.configure(this.options?.paragraph));
		}

		if (this.options.strike !== false) {
			extensions.push(Strike.configure(this.options?.strike));
		}

		if (this.options.text !== false) {
			extensions.push(Text.configure(this.options?.text));
		}

		if (this.options.link !== false) {
			extensions.push(Link.configure(this.options?.link));
		}

		if (this.options.underline !== false) {
			extensions.push(Underline.configure(this.options?.underline));
		}

		if (this.options.table !== false) {
			extensions.push(Table.configure(this.options?.table));
		}

		if (this.options.tableCell !== false) {
			extensions.push(TableCell.configure(this.options?.tableCell));
		}

		if (this.options.tableHeader !== false) {
			extensions.push(TableHeader.configure(this.options?.tableHeader));
		}

		if (this.options.tableRow !== false) {
			extensions.push(TableRow.configure(this.options?.tableRow));
		}

		return extensions;
	},
});
