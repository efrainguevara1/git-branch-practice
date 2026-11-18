import '@testing-library/jest-dom'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from './server'

// server.listen is what turns on MSW to intercept the http calls
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))
afterEach(() => server.resetHandlers()) // Resets handlers after each test (removes temporary handlers added in tests)
afterAll(() => server.close())
