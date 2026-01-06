import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  timestamp: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'contacts.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
  fs.mkdirSync(path.join(process.cwd(), 'data'));
}

// Ensure contacts.json exists
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify([]));
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, company, email, phone, category, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Read existing data
    const existingData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

    // Add new entry
    const newEntry: ContactFormData = {
      ...body,
      timestamp: new Date().toISOString(),
    };

    existingData.push(newEntry);

    // Write back to file
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}