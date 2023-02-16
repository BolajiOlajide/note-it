import { nanoid } from 'nanoid'

/**
 * This method generates a unique string that acts as an identifier for every note
 * in the database.
 *
 * @returns a random ID used to identify a note
 */
export const generateNoteID = (): string => nanoid(10)
