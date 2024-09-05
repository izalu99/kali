CREATE TABLE `translations` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP,
	`text` text NOT NULL,
	`language` text NOT NULL,
	`wordId` text NOT NULL,
	FOREIGN KEY (`wordId`) REFERENCES `words`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `words` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP,
	`text` text NOT NULL,
	`pronunciation` text,
	`type` text,
	`tense` text,
	`example` text
);
