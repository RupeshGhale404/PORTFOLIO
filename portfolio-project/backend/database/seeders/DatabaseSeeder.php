<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Education;
use App\Models\Skill;
use App\Models\Project;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password')
        ]);

        Education::create([
            'degree' => 'Bachelor of Information Technology (BIT)',
            'institution' => 'Your University',
            'start_year' => 2023,
            'end_year' => 2026,
            'focus' => 'Advanced Web Development',
            'description' => 'Focused on modern web development using React and Laravel.'
        ]);

        $skills = [
            ['name'=>'HTML & CSS','percentage'=>90],
            ['name'=>'React.js','percentage'=>80],
            ['name'=>'JavaScript','percentage'=>75],
            ['name'=>'Laravel','percentage'=>70],
            ['name'=>'Figma','percentage'=>50],
        ];
        foreach($skills as $s) Skill::create($s);

        $projects = [
            ['title'=>'Project Alpha','description'=>'A modern SPA built with React and Laravel API.','tech_stack'=>['React','Laravel','Tailwind'],'github'=>'https://github.com/username/project-alpha','live_url'=>'https://example.com/alpha'],
            ['title'=>'Project Beta','description'=>'Design-focused app using Figma prototypes and React implementation.','tech_stack'=>['React','Figma'],'github'=>'https://github.com/username/project-beta','live_url'=>'https://example.com/beta'],
            ['title'=>'Project Gamma','description'=>'Utility library and CLI for dev workflows.','tech_stack'=>['Node','Bash'],'github'=>'https://github.com/username/project-gamma','live_url'=>''],
            ['title'=>'Project Delta','description'=>'E-commerce demo built with Laravel backend and React frontend.','tech_stack'=>['Laravel','React','MySQL'],'github'=>'https://github.com/username/project-delta','live_url'=>'https://example.com/delta'],
        ];
        foreach($projects as $p) Project::create($p);
    }
}
