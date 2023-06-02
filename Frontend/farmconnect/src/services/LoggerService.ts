async function logToDatabase(
  serviceName: string,
  level: string,
  message?: string,
  userId?: number
) {
  try {
    const res = await fetch('http://localhost:3001/api/v1/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_name: serviceName,
        level: level,
        message: message,
        userId: userId,
      }),
    });

    if (!res.ok) {
      throw new Error(`Error creating log. HTTP status ${res.status}`);
    }
  } catch (error) {
    console.log('Error creating log:', error);
  }
}

class LoggerService {
  async debug(serviceName: string, message?: string, userId?: number) {
    await logToDatabase(serviceName, 'debug', message, userId);
  }

  async warning(serviceName: string, message?: string, userId?: number) {
    await logToDatabase(serviceName, 'warning', message, userId);
  }

  async error(serviceName: string, message?: string, userId?: number) {
    await logToDatabase(serviceName, 'error', message, userId);
  }
}

export default new LoggerService();
