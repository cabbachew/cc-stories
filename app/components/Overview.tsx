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
  Medal,
  Target,
  Trophy,
  User,
  Image as ImageIcon,
  Link,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Student info container */}
            <div className="flex gap-6">
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
                <div className="text-base text-muted-foreground flex items-center">
                  {studentStory.studentInfo.grade}
                  <Separator orientation="vertical" className="mx-2 h-4" />
                  {studentStory.studentInfo.school}
                </div>
              </div>
            </div>

            {/* Personality/Interests container */}
            <div className="space-y-4">
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

          <div className="grid gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mentor info container */}
            <div className="flex gap-6">
              <Avatar className="h-24 w-24 shrink-0">
                <AvatarImage
                  src={studentStory.mentorInfo.photoUrl}
                  alt={studentStory.mentorInfo.name}
                />
                <AvatarFallback>
                  {studentStory.mentorInfo.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  {studentStory.mentorInfo.name}
                </h3>
                {studentStory.mentorInfo.education && (
                  <div className="text-base text-muted-foreground flex items-center">
                    {studentStory.mentorInfo.education.major}
                    <Separator orientation="vertical" className="mx-2 h-4" />
                    {studentStory.mentorInfo.education.university}
                  </div>
                )}
                <p className="text-sm text-muted-foreground">
                  {studentStory.mentorInfo.background}
                </p>
              </div>
            </div>

            {/* Expertise container */}
            <div className="space-y-4">
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
              <div className="space-y-2">
                <h4 className="font-semibold">Shared Interests & Background</h4>
                <div className="flex flex-wrap gap-1.5">
                  {studentStory.mentorshipMatch.sharedInterests.map(
                    (interest) => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="rounded-md font-normal bg-white"
                      >
                        {interest}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <Separator className="my-6" /> */}

          <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2">
              <Heart className="h-4 w-4" />
              The Perfect Match
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">Relationship</p>
                <p>{studentStory.mentorshipMatch.relationship}</p>
              </div>

              <div className="relative">
                <Separator
                  orientation="vertical"
                  className="absolute left-0 h-full"
                />
                <div className="text-sm text-muted-foreground space-y-1 pl-4">
                  <p className="font-medium text-foreground">
                    Expertise Alignment
                  </p>
                  <p>{studentStory.mentorshipMatch.expertise}</p>
                </div>
              </div>

              <div className="relative">
                <Separator
                  orientation="vertical"
                  className="absolute left-0 h-full"
                />
                <div className="text-sm text-muted-foreground space-y-1 pl-4">
                  <p className="font-medium text-foreground">Accountability</p>
                  <p>{studentStory.mentorshipMatch.accountability}</p>
                </div>
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
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Milestones Reached</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {studentStory.outcomes.milestones.map((milestone, i) => (
                    <li key={i}>{milestone}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Project Assets</h4>
              <div className="space-y-2">
                {studentStory.gallery?.assets?.map((asset, index) => (
                  <a
                    key={index}
                    href={asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Link className="h-4 w-4" />
                    {asset.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* <Separator className="my-6" /> */}

          <div className="space-y-2">
            <h4 className="font-semibold">Testimonials</h4>
            <div className="space-y-6">
              {studentStory.outcomes.testimonials.map((testimonial, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute left-0 top-0 h-full w-1 bg-muted-foreground/20 rounded-full" />
                  <blockquote className="space-y-2">
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className="text-sm">
                      <span className="font-medium text-foreground">
                        {testimonial.author}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        · {testimonial.role}
                      </span>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gallery Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Gallery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full max-w-4xl"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {studentStory.gallery?.images?.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg bg-muted aspect-square">
                        {image.url ? (
                          <Image
                            src={image.url}
                            alt={image.caption || "Gallery image"}
                            width={288}
                            height={288}
                            unoptimized
                            className="h-full w-full object-cover transition-all hover:scale-105"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center">
                            <ImageIcon
                              className="h-10 w-10 text-muted-foreground/50"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
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
          <p className="text-muted-foreground text-sm">
            {studentStory.futureGoals}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
