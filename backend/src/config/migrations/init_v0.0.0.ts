import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createSchemaIfNotExists('schema_vitrine');

    const existUserTable: boolean = await knex.schema.hasTable('user');
    if (!existUserTable) {
        await knex.schema.withSchema('schema_vitrine').createTable('user', table => {
            table.increments('id').primary().notNullable().unique();
            table.string('firstname').notNullable();
            table.string('lastname').notNullable();
            table.string('user_description', 2048);
            table.date('birthday').notNullable();
            table.timestamps(true, true);
        });
    }

    const existProjectTable: boolean = await knex.schema.hasTable('project');
    if (!existProjectTable) {
        await knex.schema.withSchema('schema_vitrine').createTable('project', table => {
            table.increments('id').primary().notNullable().unique();
            table.string('project_name').notNullable();
            table.string('project_description', 4096).notNullable();
            table.timestamps(true, true);
        });
    }

    const existLinkTable: boolean = await knex.schema.hasTable('link');
    if (!existLinkTable) {
        await knex.schema.withSchema('schema_vitrine').createTable('link', table => {
            table.increments('id').primary().notNullable().unique();
            table.specificType(
                'http_link',
                `VARCHAR(2048)
                    CHECK (http_link LIKE 'http://%' OR http_link LIKE 'https://%')`
            )
                .notNullable()
            table.string('type').notNullable();
            table.timestamps(true, true);
        });
    }

    const existTagTable: boolean = await knex.schema.hasTable('tag');
    if (!existTagTable) {
        await knex.schema.withSchema('schema_vitrine').createTable('tag', table => {
            table.increments('id').primary().notNullable().unique();
            table.string('label').notNullable();
            table.timestamps(true, true);
        });
    }

    const existOwnerTable: boolean = await knex.schema.hasTable('owner');
    if (!existOwnerTable) {
        await knex.schema.withSchema('schema_vitrine').createTable('owner', table => {
            table
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('schema_vitrine.user')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('schema_vitrine.project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table.unique(['user_id', 'project_id']);
        });
    }

    const existProjectLinkTable: boolean = await knex.schema.hasTable('project_link');
    if (!existProjectLinkTable) {
        await knex.schema.withSchema('schema_vitrine').createTable('project_link', table => {
            table
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('schema_vitrine.project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table
                .integer('link_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('schema_vitrine.link')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table.unique(['project_id', 'link_id']);
        });
    }

    const existProjectTagTable: boolean = await knex.schema.hasTable('project_tag');
    if (!existProjectTagTable) {
        await knex.schema.withSchema('schema_vitrine').createTable('project_tag', table => {
            table
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('schema_vitrine.project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table
                .integer('tag_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('schema_vitrine.tag')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table.unique(['project_id', 'tag_id']);
        });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.withSchema('schema_vitrine').dropTableIfExists('user');
    await knex.schema.withSchema('schema_vitrine').dropTableIfExists('project');
    await knex.schema.withSchema('schema_vitrine').dropTableIfExists('tag');
    await knex.schema.withSchema('schema_vitrine').dropTableIfExists('owner');
    await knex.schema.withSchema('schema_vitrine').dropTableIfExists('project_link');
    await knex.schema.withSchema('schema_vitrine').dropTableIfExists('project_tag');

    await knex.schema.dropSchemaIfExists('schema_vitrine');
}

