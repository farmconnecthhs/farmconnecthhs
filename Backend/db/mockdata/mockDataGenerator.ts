import { Farm } from '../modules/farm/models/Farm';
import { FarmProfile } from '../modules/farm_profile/models/FarmProfile';
import { User } from '../modules/user/models/User';

import { mockFarmProfiles } from './mockFarmProfiles';
import { mockFarms } from './mockfarms';
import { mockusers } from './mockusers';

/**
 * Generate mock data for the database
 */
export function generateMockData() {
  generateUsers();
  generateFarms();
  generateFarmProfiles();
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

/**
 * Generate mock farm profiles
 */
function generateFarmProfiles() {
  for (const farmProfile of mockFarmProfiles) {
    FarmProfile.create(farmProfile);
  }
}
