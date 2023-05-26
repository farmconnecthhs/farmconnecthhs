import { Farm } from '../modules/farm/models/Farm';
import { FarmProfile } from '../modules/farm_profile/models/FarmProfile';
import { Review } from '../modules/review/models/Review';
import { User } from '../modules/user/models/User';

import { mockFarmProfiles } from './mockfarmprofiles';
import { mockFarms } from './mockfarms';
import { mockReviews } from './mockreviews';
import { mockusers } from './mockusers';

/**
 * Generate mock data for the database
 */
export function generateMockData() {
  generateUsers();
  generateFarms();
  generateFarmProfiles();
  generateReviews();
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

/**
 * Generate mock reviews
 */
function generateReviews() {
  for (const review of mockReviews) {
    Review.create(review);
  }
}
