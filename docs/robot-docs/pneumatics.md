# Pneumatics

Pneumatics are air pressure powered pistons that provide explosive and strong power.


## What comes with Pneumatics?

I will preface that pneumatics are not actually called pneumatics in the code. They are called solenoids so from here on out I 
may be calling them solenoids, but they're pretty much refer the same thing.

There are really 3 main objects that come with the pneumatics package, the Pneumatics Control Module (PCM), the Compressor, and 
the Solenoid. There are other things that exist, but in the code those are really the only things you need to worry about. The PCM 
is the hub, both the solenoid and compressor both plug into the PCM and tells them what they should be doing. The solenoid is the 
actual piston that moves back and forth, but it requires air to function. Lastly, the compressor is the object that actually 
makes the air pressure. It is loud, but do not be alarmed, it will shut off if wired correctly.

## How do I program them?

First of all, let's initialize a solenoid. The compressor and PCM do not need any initialization unless you want to do something 
with them

```java
import edu.wpi.first.wpilibj.DoubleSolenoid;

public class Pneumatics extends SubsystemBase {
    
    private DoubleSolenoid solenoid;
    public pneumatics(){
    
    }
}
```
Wow. That was so fun guys, we made a solenoid. I will note that a DoubleSolenoid is different from a regular Solenoid. A Solenoid 
only has 1 channel to move in, whereas a DoubleSolenoid has 2. Usually we use a DoubleSolenoidSolenoids because we like the 
capability to go in both directions. DoubleSolenoids are simple though. They have 3 states: Forward, Reverse, and Off. Let's think 
about what that acutally looks like. Forward is the state of the solenoid that pushes outward, reverse is the state that retracts 
inward and Off means that it'll do nothing. 

Forward and Reverse have their own numbered channels that you can assign them to. They have to be wired into the solenoid, but 
each port has a number so you can figure out with port/number is associated with the Forward and Reverse states of the solenoid, 
so let's actually give the solenoid some numbers. They take 3 values: The manufacturer of the solenoid, the forward channel port, and the reverse channel port.
```java
import edu.wpi.first.wpilibj.DoubleSolenoid;
import edu.wpi.first.wpilibj.PneumaticsModuleType;

public class Pneumatics extends SubsystemBase {
    
    private DoubleSolenoid solenoid;
    public pneumatics(){
        //For the purposes of this example, the forward channel is 0 and the reverse channel is 1
        solenoid = new DoubleSolenoid(PneumaticsModuleType.CTREPCM, 0, 1);
    }
}
```
Now that we have a solenoid, let's make some methods to go with it so we can call it in a command. We are going to need kForward 
and kReverse values. They just are values that tell the solenoid what exactly it should do with a given method.
```java
import edu.wpi.first.wpilibj.DoubleSolenoid;
import edu.wpi.first.wpilibj.PneumaticsModuleType;
import edu.wpi.first.wpilibj.DoubleSolenoid.Value;

public class Pneumatics extends SubsystemBase {
    
    private DoubleSolenoid solenoid;
    public pneumatics(){
        //For the purposes of this example, the forward channel is 0 and the reverse channel is 1
        solenoid = new DoubleSolenoid(PneumaticsModuleType.CTREPCM, 0, 1);
    }

    public void setInwards{
        //this method will make the solenoid retract
        solenoid.set(Value.kReverse);
    }

    public void setOutwards{
        //this method will make the solenoid retract
        solenoid.set(Value.kForward);
    }

//Techically we have all the other calls that the SubsystemBase comes with, but these are really all we are going to worry about
}
```
