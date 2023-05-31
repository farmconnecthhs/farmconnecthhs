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
export async function generateMockData() {
  await generateUsers();
  await generateFarms();
  await linkFavorites();
  await generateFarmProfiles();
  await generateReviews();
}

/**
 * Generate mock users
 */
async function generateUsers() {
  for (const user of mockusers) {
    await User.create(user);
  }
}

/**
 * Generate mock farms
 */
async function generateFarms() {
  for (const farm of mockFarms) {
    await Farm.create(farm);
  }
}

/**
 * Generate mock farm profiles
 */
async function generateFarmProfiles() {
  for (const farmProfile of mockFarmProfiles) {
    await FarmProfile.create(farmProfile);
  }
}

/**
 * Generate mock reviews
 */
async function generateReviews() {
  for (const review of mockReviews) {
    await Review.create(review);
  }
}

/**
 * Link all farms to all users as favorites
 */
async function linkFavorites() {
  const users: User[] = await User.findAll();
  const farms: Farm[] = await Farm.findAll();
  for (const user of users) {
    for (const farm of farms) {
      console.log(user);
      await user.addFavorite(farm);
    }
  }
}
