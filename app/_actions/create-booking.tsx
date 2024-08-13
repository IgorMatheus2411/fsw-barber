"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

interface createBookingParams {
  serviceId: string
  userId: string
  date: Date
}

export const createBooking = async (params: createBookingParams) => {
  await db.booking.create({
    data: params,
  })
  revalidatePath("/barbershops/[id]")
}
