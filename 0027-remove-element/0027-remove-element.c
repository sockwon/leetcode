void arrayDel(int *nums, int start, int numsSize);

int removeElement(int* nums, int numsSize, int val){
    for(int i=0; i<numsSize; i++){
        
        if(nums[i] == val){arrayDel(nums, i, numsSize); numsSize--;i--;}
    }
    
    return numsSize;
}

void arrayDel(int *nums, int start, int numsSize){
    for(int i=start; i<numsSize-1; i++){
        nums[i] = nums[i+1];
    }
}