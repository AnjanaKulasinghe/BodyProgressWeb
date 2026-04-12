#!/bin/bash

# Body Progress Website - Quick Deploy Script
# This script helps you deploy to GitHub Pages

echo "🚀 Body Progress Website Deployment"
echo "===================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
    echo "✅ Git initialized"
else
    echo "✅ Git repository already initialized"
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo "🔗 Setting up GitHub remote..."
    echo "Please enter your GitHub repository URL:"
    echo "Example: https://github.com/username/bodyprogress-web.git"
    read -p "Repository URL: " repo_url
    
    if [ -n "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo "✅ Remote added: $repo_url"
    else
        echo "⚠️  No URL provided, skipping remote setup"
    fi
else
    echo "✅ Remote already configured"
fi

echo ""
echo "📝 Preparing files for deployment..."

# Add all files
git add .

# Get commit message
echo ""
read -p "Commit message (press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update Body Progress website"
fi

# Commit changes
git commit -m "$commit_msg"
echo "✅ Changes committed"

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
if git push -u origin main; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Deployment complete!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Settings > Pages"
    echo "3. Source: Deploy from main branch"
    echo "4. (Optional) Add custom domain: bodyprogress.koungasolutions.co.nz"
    echo ""
    echo "Your site will be live in a few minutes! 🌐"
else
    echo ""
    echo "⚠️  Push failed. Possible reasons:"
    echo "- You haven't set up the GitHub repository yet"
    echo "- Authentication issues (try: git push -u origin main)"
    echo "- Remote URL is incorrect"
    echo ""
    echo "Manual deployment steps:"
    echo "1. Create a repository on GitHub"
    echo "2. Run: git remote add origin YOUR_REPO_URL"
    echo "3. Run: git push -u origin main"
fi
