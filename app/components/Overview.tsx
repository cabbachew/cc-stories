import { StudentStoryProps } from "@/app/types/StudentStory";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight,
  BookOpen,
  Brain,
  GraduationCap,
  Heart,
  LineChart,
  Medal,
  Target,
  Trophy,
  User,
} from "lucide-react";

export default function Overview({
  studentStory,
}: {
  studentStory: StudentStoryProps;
}) {
  return (
    <div className="space-y-6">
      {/* The Student Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            The Student
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={studentStory.studentInfo.photoUrl}
                alt={studentStory.studentInfo.name}
              />
              <AvatarFallback>
                {studentStory.studentInfo.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                {studentStory.studentInfo.name}
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Grade: {studentStory.studentInfo.grade}</p>
                <p>School: {studentStory.studentInfo.school}</p>
                <p>
                  Personality: {studentStory.studentInfo.personality.join(", ")}
                </p>
                <p>
                  Interests: {studentStory.studentInfo.interests.join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Target className="h-4 w-4" />
                Growth Areas
              </h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {studentStory.painPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                Success Metrics
              </h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {studentStory.successMetrics.map((metric, i) => (
                  <li key={i}>{metric}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Mentor Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            The Mentor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold">{studentStory.mentorInfo.name}</h3>
            <div className="text-sm text-muted-foreground">
              <p>Expertise: {studentStory.mentorInfo.expertise.join(", ")}</p>
              <p>Background: {studentStory.mentorInfo.background}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Why The Perfect Match
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="text-sm text-muted-foreground">
                <p>Relationship: {studentStory.mentorshipMatch.relationship}</p>
                <p>
                  Expertise Alignment: {studentStory.mentorshipMatch.expertise}
                </p>
                <p>
                  Accountability: {studentStory.mentorshipMatch.accountability}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Shared Interests/Background:</p>
                <ul className="list-disc list-inside">
                  {studentStory.mentorshipMatch.sharedInterests.map(
                    (interest, i) => (
                      <li key={i}>{interest}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Mentorship Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            The Mentorship
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold">Engagement Metrics</h4>
              <div className="text-sm text-muted-foreground">
                <p>
                  Length:{" "}
                  {studentStory.mentorshipDetails.engagementMetrics.length}
                </p>
                <p>
                  Consistency:{" "}
                  {studentStory.mentorshipDetails.engagementMetrics.consistency}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Medal className="h-4 w-4" />
                Challenges Overcome
              </h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {studentStory.mentorshipDetails.challengesOvercome.map(
                  (challenge, i) => (
                    <li key={i}>{challenge}</li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Skills Developed
              </h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {studentStory.mentorshipDetails.skillsDeveloped.map(
                  (skill, i) => (
                    <li key={i}>{skill}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Outcomes Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Milestones</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {studentStory.outcomes.milestones.map((milestone, i) => (
                  <li key={i}>{milestone}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Documentation</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {studentStory.outcomes.documentation.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Testimonials</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {studentStory.outcomes.testimonials.map((testimonial, i) => (
                  <li key={i}>{testimonial}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Where Are They Now?</h4>
              <p className="text-sm text-muted-foreground">
                {studentStory.outcomes.currentStatus}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What's Next Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5" />
            What&apos;s Next?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{studentStory.futureGoals}</p>
        </CardContent>
      </Card>
    </div>
  );
}
