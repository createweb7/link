import { pgTable, text, serial, integer, boolean, timestamp, decimal, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const universityMatches = pgTable("university_matches", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  academicLevel: text("academic_level").notNull(),
  preferredCountry: text("preferred_country").notNull(),
  fieldOfStudy: text("field_of_study").notNull(),
  currentScore: text("current_score").notNull(),
  matches: jsonb("matches").notNull().default('[]'),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const consultationBookings = pgTable("consultation_bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  preferredDate: text("preferred_date").notNull(),
  serviceType: text("service_type").notNull(),
  message: text("message"),
  status: text("status").notNull().default('pending'),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const eligibilityChecks = pgTable("eligibility_checks", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  targetUniversity: text("target_university").notNull(),
  academicScore: text("academic_score").notNull(),
  englishTest: text("english_test"),
  workExperience: text("work_experience"),
  eligibilityResults: jsonb("eligibility_results").notNull().default('{}'),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUniversityMatchSchema = createInsertSchema(universityMatches).omit({
  id: true,
  matches: true,
  createdAt: true,
});

export const insertConsultationBookingSchema = createInsertSchema(consultationBookings).omit({
  id: true,
  status: true,
  createdAt: true,
});

export const insertEligibilityCheckSchema = createInsertSchema(eligibilityChecks).omit({
  id: true,
  eligibilityResults: true,
  createdAt: true,
});

export type UniversityMatch = typeof universityMatches.$inferSelect;
export type InsertUniversityMatch = z.infer<typeof insertUniversityMatchSchema>;
export type ConsultationBooking = typeof consultationBookings.$inferSelect;
export type InsertConsultationBooking = z.infer<typeof insertConsultationBookingSchema>;
export type EligibilityCheck = typeof eligibilityChecks.$inferSelect;
export type InsertEligibilityCheck = z.infer<typeof insertEligibilityCheckSchema>;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});
