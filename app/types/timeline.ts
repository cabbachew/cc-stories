export interface TimelineSession {
  id: string | number;
  date: string;
  title: string;
  summary: string;
}

export interface TimelineChapter {
  id: string | number;
  startDate: string;
  endDate: string;
  title: string;
  summary: string;
}

export interface TimelineProps {
  sessions?: TimelineSession[];
  chapters?: TimelineChapter[];
  loading?: boolean;
}
