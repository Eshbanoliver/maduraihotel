/**
 * Hotel Madurai Verification Script (TypeScript)
 * 
 * Verifies all property data, asset references, and booking links.
 */

import * as fs from 'fs';
import * as path from 'path';
import { HOTEL_INFO, ROOMS, FACILITIES, TESTIMONIALS, NEARBY_PLACES } from '../src/data/hotelData';

export function verifySiteData(): boolean {
  console.log('--- HOTEL MADURAI TYPESCRIPT INTEGRITY CHECK ---');
  let hasErrors = false;

  // 1. Verify Property Info
  console.log(`Checking property info: ${HOTEL_INFO.name}...`);
  if (!HOTEL_INFO.bookingUrl.includes('eglobe-solutions.com')) {
    console.error('Error: Official eGlobe booking URL missing!');
    hasErrors = true;
  }
  if (HOTEL_INFO.whatsappNumber !== '918741914825') {
    console.error('Error: WhatsApp number mismatch!');
    hasErrors = true;
  }

  // 2. Verify Room Assets
  console.log(`Checking ${ROOMS.length} room categories...`);
  for (const room of ROOMS) {
    const fullPath = path.join(process.cwd(), 'public', room.image);
    if (!fs.existsSync(fullPath)) {
      console.error(`Error: Room image missing at ${fullPath}`);
      hasErrors = true;
    } else {
      console.log(`  ✓ ${room.name}: image verified (${room.features.length} features)`);
    }
  }

  // 3. Verify Facilities
  console.log(`Checking ${FACILITIES.length} hotel facilities...`);
  const facilityCount = FACILITIES.length;
  if (facilityCount < 8) {
    console.error('Error: Insufficient verified facilities!');
    hasErrors = true;
  }

  // 4. Verify Testimonials
  console.log(`Checking ${TESTIMONIALS.length} authentic testimonials...`);
  const authors = TESTIMONIALS.map(t => t.author);
  if (!authors.includes('Sapna') || !authors.includes('Shivani') || !authors.includes('Ashok')) {
    console.error('Error: Original reviewers missing!');
    hasErrors = true;
  }

  // 5. Verify Nearby Places
  console.log(`Checking ${NEARBY_PLACES.length} nearby locations...`);
  for (const place of NEARBY_PLACES) {
    const placeImgPath = path.join(process.cwd(), 'public', place.image);
    if (!fs.existsSync(placeImgPath)) {
      console.error(`Error: Nearby place image missing at ${placeImgPath}`);
      hasErrors = true;
    }
  }

  if (!hasErrors) {
    console.log('\n[ALL CHECKS PASSED] 100% TypeScript Verified.');
  }
  return !hasErrors;
}

verifySiteData();
