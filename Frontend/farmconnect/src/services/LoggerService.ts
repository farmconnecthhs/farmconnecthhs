/**
 * @param{string} serviceName
 * @param{string} level
 * @param{string} message
 * @param{number} userId
 */
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

/**
 * LoggerService class
 * @class
 * @classdesc LoggerService class to log to database
 */
class LoggerService {

  /**
   * Log info to database
   * @param{string} serviceName
   * @param{string} message
   * @param{number} userId
   */
  async debug(serviceName: string, message?: string, userId?: number) {
    await logToDatabase(serviceName, 'debug', message, userId);
  }

  /**
   * Log info to database
   * @param{string} serviceName
   * @param{string} message
   * @param{number} userId
   */
  async warning(serviceName: string, message?: string, userId?: number) {
    await logToDatabase(serviceName, 'warning', message, userId);
  }

  /**
   * Log error to database
   * @param{string} serviceName
   * @param{string} message
   * @param{number} userId
   * @param{Error} error
   */
  async error(
    serviceName: string,
    message?: string,
    userId?: number,
    error?: Error
  ) {
    const formattedError = error
      ? `${error.name}: ${error.message} : ${error.stack}`
      : '';
    const fullMessage = message
      ? `${message} : ${formattedError}`
      : formattedError;
    await logToDatabase(serviceName, 'error', fullMessage, userId);
  }
}

export default new LoggerService();
