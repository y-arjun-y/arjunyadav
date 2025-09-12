#!/bin/bash

# Set your date range here (YYYY-MM-DD)
START_DATE="2025-09-12"
END_DATE="2025-09-12"

# Commit message
COMMIT_MESSAGE="arjunyadav.net"

echo "Creating Git commits from $START_DATE to $END_DATE..."

current_date="$START_DATE"
while [[ "$current_date" < "$END_DATE" || "$current_date" == "$END_DATE" ]]; do
  # Create commit-log.txt with the current date
  echo "Commit for $current_date" > commit-log.txt
  
  # Add the file to git
  git add commit-log.txt
  
  # Create commit with specific date (12 PM UTC)
  GIT_AUTHOR_DATE="$current_date 12:00:00 UTC" \
  GIT_COMMITTER_DATE="$current_date 12:00:00 UTC" \
  git commit -m "$COMMIT_MESSAGE"
  
  echo "Created commit for $current_date"
  
  # Increment date by 1 day
  current_date=$(date -j -v+1d -f "%Y-%m-%d" "$current_date" +"%Y-%m-%d")
done

echo "All commits created successfully!"
echo "Run 'git log --oneline' to see the commits"