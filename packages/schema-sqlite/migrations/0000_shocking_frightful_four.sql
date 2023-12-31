CREATE TABLE `app` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text DEFAULT '' NOT NULL,
	`name` text NOT NULL,
	`website` text DEFAULT '' NOT NULL,
	`redirect_uri` text DEFAULT '' NOT NULL,
	`client_id` text NOT NULL,
	`client_secret` text NOT NULL,
	`scopes` text NOT NULL,
	`created_at` DATETIME DEFAULT (STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW')) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_app_created` ON `app` (`created_at`);--> statement-breakpoint
CREATE INDEX `idx_app_user` ON `app` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `uidx_app_client_id` ON `app` (`client_id`);
