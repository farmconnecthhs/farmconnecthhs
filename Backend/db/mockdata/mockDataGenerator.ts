import { BusinessHours } from '../modules/business_hours/models/BusinessHours';
import { Farm } from '../modules/farm/models/Farm';
import { FarmProfile } from '../modules/farm_profile/models/FarmProfile';
import { Logger } from '../modules/logger/models/Logger';
import { ProductCategory } from '../modules/product_category/models/ProductCategory';
import { Review } from '../modules/review/models/Review';
import { User } from '../modules/user/models/User';

import { mockBusinessHours } from './mockBusinessHours';
import { mockFarmProfiles } from './mockFarmProfiles';
import { mockFarms } from './mockfarms';
import { mockLogs } from './mocklogs';
import { mockProductCategories } from './MockProductCategories';
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
  await generateProductCategories();
  await linkProductCategoriesToFarms();
  await generateLogs();
  await generateBusinessHours();
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
 * Link product categories to farms
 */
async function linkProductCategoriesToFarms() {
  await Farm.findAll().then((farms) => {
    ProductCategory.findAll().then(async (productCategories) => {
      for (const farm of farms) {
        for (const productCategory of productCategories) {
          await farm.addProductCategory(productCategory);
        }
      }
    });
  });
}

/**
 * Generate mock product categories
 */
async function generateProductCategories() {
  for (const productCategory of mockProductCategories) {
    await ProductCategory.create(productCategory);
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
 * Generate mock business hours
 */
function generateBusinessHours() {
  for (const businessHours of mockBusinessHours) {
    BusinessHours.create(businessHours);
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

/**
 * Generate mock logs
 */
async function generateLogs() {
  for (const log of mockLogs) {
    await Logger.create(log);
  }
}
