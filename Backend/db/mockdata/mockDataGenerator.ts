import { Farm } from '../modules/farm/models/Farm';
import { User } from '../modules/user/models/User';

import { mockFarms } from './mockfarms';
import { mockusers } from './mockusers';

/**
 * Generate mock data for the database
 */
export function generateMockData() {
  generateUsers();
  generateFarms();
}

/**
 * Generate mock users
 */
function generateUsers() {
  for (const user of mockusers) {
    User.create(user);
  }
}

/**
 * Generate mock farms
 */
function generateFarms() {
  for (const farm of mockFarms) {
    Farm.create(farm);
  }
}
