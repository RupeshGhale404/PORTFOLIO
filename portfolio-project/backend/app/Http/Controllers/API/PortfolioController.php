<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Education;
use App\Models\Skill;
use App\Models\Project;

class PortfolioController extends Controller
{
    public function index()
    {
        $education = Education::first();
        $skills = Skill::orderBy('id')->get();
        $projects = Project::orderBy('id')->get();

        $contact = [
            'email' => 'your.email@example.com',
            'phone' => '+977XXXXXXXXXX',
            'linkedin' => 'https://linkedin.com/in/username'
        ];

        return response()->json(compact('education','skills','projects','contact'));
    }

    // Admin: create/update/delete skills and projects
    public function storeSkill(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'percentage' => 'required|numeric|min:0|max:100',
        ]);
        $skill = Skill::create($data);
        return response()->json($skill,201);
    }

    public function updateSkill(Request $request, Skill $skill)
    {
        $data = $request->validate([
            'percentage' => 'required|numeric|min:0|max:100',
        ]);
        $skill->update($data);
        return response()->json($skill);
    }

    public function destroySkill(Skill $skill)
    {
        $skill->delete();
        return response()->json(['message'=>'Deleted']);
    }

    public function storeProject(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'tech_stack' => 'required|array',
            'github' => 'nullable|url',
            'live_url' => 'nullable|url'
        ]);
        $project = Project::create($data);
        return response()->json($project,201);
    }

    public function updateProject(Request $request, Project $project)
    {
        $data = $request->validate([
            'title' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
            'tech_stack' => 'sometimes|required|array',
            'github' => 'nullable|url',
            'live_url' => 'nullable|url'
        ]);
        $project->update($data);
        return response()->json($project);
    }

    public function destroyProject(Project $project)
    {
        $project->delete();
        return response()->json(['message'=>'Deleted']);
    }
}
