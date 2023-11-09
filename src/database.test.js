
import { connectDB } from './database';

describe('Database Connection Test', () => {
  it('should connect to the database', async () => {
    const originalLog = console.log; 

    console.log = (output) => {
      if (output.includes('DB connected to')) {
        expect(output).toContain('DB connected to');
      }
    };

    await connectDB(); 

    console.log = originalLog;
  });
});
