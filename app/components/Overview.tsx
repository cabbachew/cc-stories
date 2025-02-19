import { StudentStoryProps } from "@/app/types/StudentStory";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex gap-6 w-full md:w-auto">
              <Avatar className="h-24 w-24 shrink-0">
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
                <p className="text-base text-muted-foreground">
                  {studentStory.studentInfo.grade}
                  <span className="mx-2">⬩</span>
                  {studentStory.studentInfo.school}
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-4 w-full md:pl-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Personality</h4>
                <div className="flex flex-wrap gap-1.5">
                  {studentStory.studentInfo.personality.map((trait) => (
                    <Badge
                      key={trait}
                      variant="secondary"
                      className="rounded-md font-normal"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Interests</h4>
                <div className="flex flex-wrap gap-1.5">
                  {studentStory.studentInfo.interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant="outline"
                      className="rounded-md font-normal bg-white"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
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
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={studentStory.mentorInfo.photoUrl}
                alt={studentStory.mentorInfo.name}
              />
              <AvatarFallback>{studentStory.mentorInfo.name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                {studentStory.mentorInfo.name}
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {studentStory.mentorInfo.background}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Expertise</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {studentStory.mentorInfo.expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-md font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
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
