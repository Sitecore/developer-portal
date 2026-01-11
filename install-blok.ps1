# Script to install all @blok components with auto-yes to overwrite prompts
$input = "y" * 200
$input | npx shadcn@latest add @blok/blok-components --yes
