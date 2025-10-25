#!/bin/bash

# Google Calendar API Environment Setup Script
echo "🔧 Setting up Google Calendar API environment variables..."

# Create .env.local file
cat > .env.local << 'EOF'
# Google Calendar API Credentials
GOOGLE_CLIENT_EMAIL=calendar-booking-service@eyes-doctor-476206.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDiTuMMzb6u7VmY\nDbrjM3eDCABWh1NS2905X2KSoBqvqfgKwfXCMIT42yciwZCernTP/YxCJiVDm41/\npy8I5XJ4hbbnIf+KKpGsnfbSBD5DgIe10pIRaGOolEAJtEh9O14v1apuwgdm/8SU\nnH1fPoVZBdmuP3eA3WJqvyhDIPzxlLFLVnuxdtOpT269nJc5JfnHae7O9b04tPhH\nq7gePEg7oYi1F9dldZp6j0NqIV4HP7cumckYs/rhOZG6ZNBLm/xLDKSHSOEsfEw1\n9lwKHgkEkuQ7HXZApaTZQCddDPoWkRsK2HbXmxyfX/CvNSM7l0URW4CVS2lrgLSa\nU6Syzs9jAgMBAAECggEACRR8NKfOpkscpKasYHBQs7+u78nXNIRg0Gv80wA8gd7S\ndnAI0cVLmIaGf/T/Pfam9i9ooMDSDu/fUgddskAugxpuV8C79Ym2tZPS8uM7sk6m\nY0uzE6K6GOn11c3XeLrYkRfEElSTonTRqNrMhvVFuWgsLzsZquB3Eexgi6z3qSOo\nUdaC+OIxnDiVhr/lfTGETHfxAV+FkK6+bLlOkuL1nwt/mobtgzWs6TGdyjWvLbL9\nU5F1crPBrbbAmhKqv+BXdEXFvYj0QbxF8H0r/gREZ43LkqWuDH3jAGg+f5I/unaw\n0L9BfC1e7peG/kh1p9V+nrDFcrwIjMpS9EvarbE5KQKBgQD7t5jLaOa9Eq3/VILF\n3xScg/Xgqzb/F0vQtayKbd8BEEd8I8hL23phHDQDjJL5QNBm5Ono6oO9TSjwuAcv\nmH6Y9vtqA93nREBEICwVK9H5bPMKtguO4uTXHxHPAI7AOG0NEjxPftYbzRfJlCpL\n+ervw3jq1jfttz1hRhlNTjeiGwKBgQDmKJ25sEfNJBI/bgZfMS1nY9mNZzX2VZBh\nA5b6RAC9T8Bnyd89cgNj7SCw3XYdLjNvxvUkwLDP3CobECoLvUeb1TzkUpMPEFe2\nbQLX0H7wBHMy/xUMfb28zqaXE75OcCKqFsifilaW/4ISYxdO+hnptPKvG3g4TTkU\nR1jEkv2cWQKBgQDdYN0qmDnGM7V/h63zpHyWIqCOVUZrFuwAxKbYoESuxMh572Zr\nAL4ixhEgxfNE77HZrJ3j0MzIIiJNgyweufktQppe5MO2b5ot0DW08PMccKtX0j9c\nDUTBxXt+GLlzaKzQACe2qpBXpwqyqHKCm2v6Lmob7wcFNFDxShtal93p3QKBgQC5\nRfDRzYm/JU5bKSKP9nJqTAKQxYi252H19oHOrHc77bsg0WyXdfQsuHIcbenqy4o0\nbKBiGYs7iCuM5ZIzKQc/9oOx+JbRBYLWIyKqv/evFqX1Y0l6aK4YEvIfo5EKa1I8\nQWL2qtHRc5UtX/8fYE0DyNmjBCXejKtqG5TliL4G4QKBgQDqDVYa9REzmgxJHzRJ\nfaVZ9h/9rR+1lx75SU5n7zzrd89SbpKdhdFkEXLC4P2m2Tq9/6fOeaingop8t92P\nMtYc+CK/hkjmVVUvVbs/g1F4RGVk0NFnw31wscmVkERnvdFKZtJyulIHnrFm7OlY\n/fMryBs+ryXASyWSTJ7Lcp5ttw==\n-----END PRIVATE KEY-----\n"

# Optional: Specific Calendar ID (leave as 'primary' to use default)
GOOGLE_CALENDAR_ID=primary
EOF

echo "✅ Environment variables created in .env.local"
echo "🔧 Next steps:"
echo "1. Share your Google Calendar with the service account"
echo "2. Restart your development server"
echo "3. Test the booking system"
echo ""
echo "📅 To share calendar:"
echo "1. Go to https://calendar.google.com/"
echo "2. Create a new calendar: 'Eye Care Clinic Appointments'"
echo "3. Click calendar → Settings and sharing"
echo "4. Add: calendar-booking-service@eyes-doctor-476206.iam.gserviceaccount.com"
echo "5. Give 'Make changes to events' permission"
