sensor = 0
sensor_t = 0
time = 0
state = 0

def on_forever():
    global sensor, time, state, sensor_t
    time_t = 0
    sensor = pins.digital_read_pin(DigitalPin.P1)
    serial.write_line("" + str(sensor))
    basic.pause(0)
    if sensor_t - sensor == -1:
        time = input.running_time()
        state = 1
    elif time_t - time > 1000:
        pass
    else:
        pass
    sensor_t = sensor_t
basic.forever(on_forever)
