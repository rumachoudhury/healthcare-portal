import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// GET: Fetch all prescriptions
export async function GET() {
  try {
    const prescriptions = await prisma.prescription.findMany({
      include: {
        patient: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        doctor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(prescriptions);
  } catch (error) {
    console.error("GET prescriptions error:", error);

    return NextResponse.json(
      { error: "Failed to fetch prescriptions" },
      { status: 500 },
    );
  }
}

// POST: Create a prescription
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      patientId,
      doctorId,
      medication,
      dosage,
      frequency,
      instructions,
      status,
      startDate,
      endDate,
    } = body;

    if (!patientId || !doctorId || !medication?.trim() || !dosage?.trim()) {
      return NextResponse.json(
        { error: "Patient, doctor, medication and dosage are required." },
        { status: 400 },
      );
    }

    if (
      status !== undefined &&
      !["ACTIVE", "COMPLETED", "EXPIRED"].includes(status)
    ) {
      return NextResponse.json(
        { error: "Invalid prescription status." },
        { status: 400 },
      );
    }

    const patient = await prisma.user.findUnique({
      where: { id: patientId },
      select: { id: true, role: true },
    });

    const doctor = await prisma.user.findUnique({
      where: { id: doctorId },
      select: { id: true, role: true },
    });

    console.log("DEBUG doctorId:", doctorId);
    console.log("DEBUG doctor:", doctor);

    if (!patient || patient.role !== "PATIENT") {
      return NextResponse.json(
        { error: "Valid patient not found." },
        { status: 400 },
      );
    }

    if (!doctor || doctor.role !== "DOCTOR") {
      return NextResponse.json(
        { error: "Valid doctor not found." },
        { status: 400 },
      );
    }

    const prescription = await prisma.prescription.create({
      data: {
        patientId,
        doctorId,
        medication: medication.trim(),
        dosage: dosage.trim(),
        frequency: frequency?.trim() || null,
        instructions: instructions?.trim() || null,
        status: status ?? "ACTIVE",
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
      },
      include: {
        patient: {
          select: {
            id: true,
            name: true,
          },
        },
        doctor: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(prescription, { status: 201 });
  } catch (error) {
    console.error("POST prescription error:", error);

    return NextResponse.json(
      { error: "Failed to create prescription" },
      { status: 500 },
    );
  }
}
