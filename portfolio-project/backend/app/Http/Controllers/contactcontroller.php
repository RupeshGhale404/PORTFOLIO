<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|min:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors'  => $validator->errors(),
            ], 422);
        }

        $validated = $validator->validated();

        // Store in database
        $contact = Contact::create($validated);

        // Optionally send an email notification (configure mail driver in .env)
        try {
            Mail::raw(
                "New message from {$validated['name']} ({$validated['email']})\n\nSubject: {$validated['subject']}\n\n{$validated['message']}",
                function ($mail) use ($validated) {
                    $mail->to('your-email@example.com')
                         ->subject('New Contact Form Submission: ' . $validated['subject']);
                }
            );
        } catch (\Exception $e) {
            Log::warning('Contact email failed: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.',
            'data'    => $contact,
        ], 201);
    }
}

        ], 201);
    }
}