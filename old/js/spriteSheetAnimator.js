/**
 * Create a new Animator object.
 * @param {Object} target - The target HTML element whos background is being animated.
 * @param {number} width - The width of a single frame in the sprite sheet.
 * @param {number} height - The height of a single frame in the sprite sheet.
 * @param {number} frames - The number of frames in the sprite sheet.
 * @param {number} fspd - The speed of each frame in ms.
 * @param {number} delay - The time to rest after completing the animation in ms.
 * @returns {Object} Return the newly built Animator object.
 */
function Animator(target, width, height, frames, fspd, delay){
    var animator = {};
    
    animator.target     = target;
    animator.width      = width;
    animator.height     = height;
    animator.frames     = frames;
    animator.fspd       = fspd;
    animator.delay      = delay;
    animator.index      = 0;
    
    /**
     * Set the number of frames for the Animator.
     * @param {Object} target - The new target HTML element whos background is being animated.
     */
    animator.setTarget = function(target){
        animator.target = target;
    }
    
    /**
     * Set the number of frames for the Animator.
     * @param {number} width - The new width of a single frame in the sprite sheet.
     */
    animator.setWidth = function(width){
        animator.width = width;
    }
    
    /**
     * Set the number of frames for the Animator.
     * @param {number} height - The new height of a single frame in the sprite sheet.
     */
    animator.setHeight = function(height){
        animator.height = height;
    }
    
    /**
     * Set the number of frames for the Animator.
     * @param {number} frames - The new number of frames for the animation.
     */
    animator.setFrames = function(frames){
        animator.frames = frames;
    }
    
    /**
     * Set a new fspd for the Animator.
     * @param {number} fspd - The new speed of each frame in ms.
     */
    animator.setFspd = function(fspd){
        animator.fspd = fspd;
    }
    
    /**
     * Set the end-of-animation delay for the Animator.
     * @param {number} delay - The new time to rest after completing the animation in ms.
     */
    animator.setDelay = function(delay){
        animator.delay = delay;
    }
    
    /**
     * Animate the sprite sheet that is set as the background image of the target HTML element. This function should not be called except by animator.run().
     */
    animator.animate = function() {
        if(animator.index > -animator.frames){
            animator.target.css("background-position", animator.width*(animator.index)+"px, "+animator.height+"px");
            animator.index--;
        } else {
            animator.target.css("background-position", animator.width*(animator.index+1)+"px, "+animator.height+"px");
            setTimeout(function(){
                animator.index = 0;
            }, animator.delay);
        }
    }
    
    /**
     * Run the sprite sheet animation at the desired frame speed (fspd).
     */
    animator.run = function(){
        setInterval(function(){
            animator.animate();
        }, fspd);
    }
    
    return animator;
}