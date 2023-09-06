import ReviewKeyword from '@/components/review/ReviewKeyword';
import Button from '@/components/review/Button';
import VisitedPlace from '@/components/review/VisitedPlace';
import ReviewInput from '@/components/review/ReviewInput';
import ReviewPhoto from '@/components/review/ReviewPhoto';

function Review() {
  return (
    <form className="flex flex-col gap-4 flex-wrap max-w-3xl">
      <VisitedPlace/>
      <ReviewInput/>
      <ReviewPhoto/>
      <ReviewKeyword/>
      <Button type='submit' text='등록하기'/>
    </form>
  )
}

export default Review